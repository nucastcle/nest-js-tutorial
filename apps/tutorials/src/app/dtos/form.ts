import { Contains, IsEmail, IsEnum, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export enum Type {
  Test = 'test',
  Tutorial = 'tutorial'
}
export class FormDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsInt()
  @Max(10)
  rating: number;

  @IsEnum(Type)
  @IsString()
  type: string;
}
