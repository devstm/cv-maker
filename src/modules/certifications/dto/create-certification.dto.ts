import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateCertificationDto {
  @IsNotEmpty()
  company: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  startAt: string;

  @IsOptional()
  endAt: string;

  @IsNotEmpty()
  @IsNumber()
  profileId: number;
}

// certifications
/* 
title
company
start_at
end_at
profile_id
*/
