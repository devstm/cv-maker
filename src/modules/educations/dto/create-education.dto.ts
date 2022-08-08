import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  university: number;

  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  degree: string;

  @IsNotEmpty()
  collage: string;

  @IsNotEmpty()
  startAt: string;

  @IsOptional()
  endAt: string;

  @IsNotEmpty()
  @IsNumber()
  profileId: number;
}
