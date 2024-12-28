import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as MongooseSchema } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
     @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
     _id: MongooseSchema.Types.ObjectId;

     @Prop({ required: true })
     title: string;

     @Prop()
     description: string;

     @Prop({ default: false })
     completed: boolean;

     @Prop({ default: Date.now })
     createdAt: Date;

}

export const TaskSchema = SchemaFactory.createForClass(Task);