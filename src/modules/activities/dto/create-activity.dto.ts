import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  description: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  link: string;

  @IsOptional()
  image: string;

  @IsNotEmpty()
  profileId: number;
}
