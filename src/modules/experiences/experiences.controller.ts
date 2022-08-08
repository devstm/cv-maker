import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { CreateExperiencesDto } from './dto/create-experiences.dto';
import { UpdateExperiencesDto } from './dto/update-experiences.dto';

@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Post()
  create(@Body() createExperiencesDto: CreateExperiencesDto) {
    return this.experiencesService.create(createExperiencesDto);
  }

  @Get('profile/:id')
  findAll(@Param('id') id: string) {
    return this.experiencesService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experiencesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExperiencesDto: UpdateExperiencesDto,
  ) {
    return this.experiencesService.update(+id, updateExperiencesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experiencesService.remove(+id);
  }
}
