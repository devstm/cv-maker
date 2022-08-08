import { PartialType } from '@nestjs/mapped-types';
import { CreateExperiencesDto } from './create-experiences.dto';

export class UpdateExperiencesDto extends PartialType(CreateExperiencesDto) {}
