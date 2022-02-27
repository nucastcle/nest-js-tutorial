import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsInt,
  Max,
  IsEnum,
} from 'class-validator';

export enum Type {
  Test = 'test',
  Tutorial = 'tutorial',
}
export class UserDto {
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

export class UserResponseDto {
  id: string;
  email: string;
  text: string;
  rating: number;
  type: string;
}
