import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/common/constants';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skills } from './entities/skill.model';

@Injectable()
export class SkillsService {
  constructor(
    @Inject(PROVIDERS.SKILLS_PROVIDER)
    private readonly skillsRepository: typeof Skills,
  ) {}

  create(createSkillDto: CreateSkillDto): Promise<Skills> {
    const skill = this.skillsRepository.create({ ...createSkillDto });
    return skill;
  }

  findAll() {
    const skills = this.skillsRepository.findAll();
    return skills;
  }

  findOne(id: number) {
    const skill = this.skillsRepository.findOne({
      where: {
        id,
      },
    });
    return skill;
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    const skill = await this.skillsRepository.findByPk(id);
    skill.update({ ...updateSkillDto });
    return skill;
  }

  remove(id: number) {
    const skill = this.skillsRepository.destroy({
      where: {
        id,
      },
    });
    return skill;
  }
}
