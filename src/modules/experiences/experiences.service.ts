import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/common/constants';
import { Profiles } from '../profile/entities/profile.model';
import { CreateExperiencesDto } from './dto/create-experiences.dto';
import { UpdateExperiencesDto } from './dto/update-experiences.dto';
import { Experiences } from './entities/experiences.model';

@Injectable()
export class ExperiencesService {
  constructor(
    @Inject(PROVIDERS.EXPERIENCES_PROVIDER)
    private readonly experiencesProvider: typeof Experiences,
  ) {}

  create(createExperiencesDto: CreateExperiencesDto) {
    const experience = this.experiencesProvider.create({
      ...createExperiencesDto,
    });
    return experience;
  }

  findAll(profileId: number) {
    const experiences = this.experiencesProvider.findAll({
      where: {
        profileId,
      },
      include: [
        {
          model: Profiles,
        },
      ],
    });
    return experiences;
  }

  findOne(id: number) {
    const experiences = this.experiencesProvider.findByPk(id);
    return experiences;
  }

  update(id: number, updateExperiencesDto: UpdateExperiencesDto) {
    const experience = this.experiencesProvider.update(updateExperiencesDto, {
      where: {
        id,
      },
    });
    return experience;
  }

  remove(id: number) {
    const experience = this.experiencesProvider.destroy({
      where: {
        id,
      },
    });
    return experience;
  }
}
