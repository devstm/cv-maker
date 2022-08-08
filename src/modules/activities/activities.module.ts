import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { activitiesProvider } from './activities.provider';

@Module({
  controllers: [ActivitiesController],
  providers: [...activitiesProvider, ActivitiesService],
})
export class ActivitiesModule {}
