import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateTaskDto {

    @IsString()
    @Length(1, 30)
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    title: string;

    @IsString()
    @Length(1, 100)  
    @IsOptional()
    description: string;


  
}
