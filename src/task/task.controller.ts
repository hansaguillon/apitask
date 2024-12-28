import { 
  Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Patch 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schema/task.schema';

@ApiTags('Tasks') 
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Tarea creada exitosamente', type: Task })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Datos inválidos' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Lista de tareas obtenida exitosamente', type: [Task] })
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener una tarea por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: String })
  @ApiResponse({ status: HttpStatus.OK, description: 'Tarea encontrada', type: Task })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Tarea no encontrada' })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualizar una tarea por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: String })
  @ApiBody({ description: 'Datos para actualizar la tarea', type: UpdateTaskDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'Tarea actualizada exitosamente', type: Task })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Tarea no encontrada' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Datos inválidos' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar una tarea por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: String })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Tarea eliminada exitosamente' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Tarea no encontrada' })
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}