import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/common/constants';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { Certification } from './entities/certification.model';

@Injectable()
export class CertificationsService {
  constructor(
    @Inject(PROVIDERS.CERTIFICATIONS_PROVIDER)
    private readonly certificationRepository: typeof Certification,
  ) {}

  create(createCertificationDto: CreateCertificationDto) {
    return this.certificationRepository.create({ ...createCertificationDto });
  }

  findAll(id: number) {
    const certifications = this.certificationRepository.findAll({
      where: { profileId: id },
    });
    return certifications;
  }

  findOne(id: number) {
    const certification = this.certificationRepository.findByPk(id);
    return certification;
  }

  update(id: number, updateCertificationDto: UpdateCertificationDto) {
    return this.certificationRepository.update(
      { ...updateCertificationDto },
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.certificationRepository.destroy({ where: { id } });
  }
}
