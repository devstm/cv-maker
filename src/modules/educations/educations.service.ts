import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/common/constants';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.model';

@Injectable()
export class EducationsService {
  constructor(
    @Inject(PROVIDERS.EDUCATIONS_PROVIDER)
    private readonly educationsRepository: typeof Education,
  ) {}

  create(createEducationDto: CreateEducationDto) {
    const education = this.educationsRepository.create({
      ...createEducationDto,
    });
    return education;
  }

  findAll(profileId: number) {
    const educations = this.educationsRepository.findAll({
      where: {
        profileId,
      },
    });
    return educations;
  }

  findOne(id: number) {
    const education = this.educationsRepository.findByPk(id);
    return education;
  }

  update(id: number, updateEducationDto: UpdateEducationDto) {
    const education = this.educationsRepository.update(
      { ...updateEducationDto },
      { where: { id } },
    );
    return education;
  }

  remove(id: number) {
    const education = this.educationsRepository.destroy({ where: { id } });
    return education;
  }
}
