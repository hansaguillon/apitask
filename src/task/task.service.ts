import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schema/task.schema';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {

  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const task = new this.taskModel(createTaskDto);
      return await task.save();
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException('Datos de tarea inválidos: ' + error.message);
      }
      throw new Error('Error al crear la tarea: ' + error.message);
    }
  }

  async findAll(): Promise<Task[]> {
    try {
      const tasks = await this.taskModel.find().exec();
      if (!tasks.length) {
        throw new NotFoundException('No se encontraron tareas');
      }
      return tasks;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error('Error al obtener las tareas: ' + error.message);
    }
  }

  async findOne(id: string): Promise<Task> {
    this.validateObjectId(id);

    try {
      const task = await this.taskModel.findById(id).exec();
      if (!task) {
        throw new NotFoundException(`No se encontró la tarea con ID: ${id}`);
      }
      return task;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Error al buscar la tarea ${id}: ${error.message}`);
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.validateObjectId(id);

    try {
      const updatedTask = await this.taskModel.findOneAndUpdate(
        { _id: id },
        { $set: updateTaskDto },
        { 
          new: true,
          runValidators: true,
        }
      ).exec();

      if (!updatedTask) {
        throw new NotFoundException(`No se encontró la tarea con ID: ${id}`);
      }

      return updatedTask;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      if (error.name === 'ValidationError') {
        throw new BadRequestException('Datos de actualización inválidos: ' + error.message);
      }
      throw new Error(`Error al actualizar la tarea ${id}: ${error.message}`);
    }
  }

  async remove(id: string): Promise<Task> {
    this.validateObjectId(id);

    try {
      const deletedTask = await this.taskModel.findOneAndDelete({ _id: id }).exec();
      
      if (!deletedTask) {
        throw new NotFoundException(`No se encontró la tarea con ID: ${id}`);
      }

      return deletedTask;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Error al eliminar la tarea ${id}: ${error.message}`);
    }
  }

  private validateObjectId(id: string): void {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Formato de ID inválido: ${id}`);
    }
  }



  async findByStatus(completed: boolean): Promise<Task[]> {
    try {
      const tasks = await this.taskModel.find({ completed }).exec();
      if (!tasks.length) {
        throw new NotFoundException(
          `No se encontraron tareas ${completed ? 'completadas' : 'pendientes'}`
        );
      }
      return tasks;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error('Error al filtrar las tareas por estado: ' + error.message);
    }
  }

 

}
