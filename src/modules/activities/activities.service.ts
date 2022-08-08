import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/common/constants';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.model';

@Injectable()
export class ActivitiesService {
  constructor(
    @Inject(PROVIDERS.ACTIVITIES_PROVIDER)
    private readonly activitiesRepository: typeof Activity,
  ) {}

  create(createActivityDto: CreateActivityDto) {
    return this.activitiesRepository.create({ ...createActivityDto });
  }

  findAll(id: number) {
    return this.activitiesRepository.findAll({
      where: { profileId: id },
    });
  }

  findOne(id: number) {
    return this.activitiesRepository.findByPk(id);
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.activitiesRepository.update(
      { ...updateActivityDto },
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.activitiesRepository.destroy({ where: { id } });
  }
}
