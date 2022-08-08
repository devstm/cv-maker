import { IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  bio: string;

  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  middleName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
