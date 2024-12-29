import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateTaskDto {

    @IsString()
    @Length(1, 45)
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    title: string;

    @IsString()
    @Length(0, 150)  
    @IsOptional()
    description: string;


  
}
