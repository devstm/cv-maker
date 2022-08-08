import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesController } from './experiences.controller';
import { experiencesProvider } from './experiences.provider';

@Module({
  controllers: [ExperiencesController],
  providers: [...experiencesProvider, ExperiencesService],
})
export class ExperiencesModule {}
