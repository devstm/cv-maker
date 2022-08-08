import { Module } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { EducationsController } from './educations.controller';
import { educationsProvider } from './educations.provider';

@Module({
  controllers: [EducationsController],
  providers: [EducationsService, ...educationsProvider],
})
export class EducationsModule {}
