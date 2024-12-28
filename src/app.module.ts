import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hansaguillon:Sanca7521@task.ztxin.mongodb.net/taskdb?retryWrites=true&w=majority&appName=task' ), TaskModule],

  
  controllers: [],
  providers: [],
})
export class AppModule {}
