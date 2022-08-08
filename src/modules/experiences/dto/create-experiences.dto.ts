import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateExperiencesDto {
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  position: string;

  @IsNotEmpty()
  startAt: string;

  @IsOptional()
  endAt: string;

  @IsNotEmpty()
  @IsNumber()
  profileId: number;
}
