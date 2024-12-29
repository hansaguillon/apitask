import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';


@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@task.ztxin.mongodb.net/${process.env.MONGODB_CLUSTER}?retryWrites=true&w=majority&appName=${process.env.MONGODB_DATABASE}` ), TaskModule],

  
  controllers: [],
  providers: [],
})
export class AppModule {}
