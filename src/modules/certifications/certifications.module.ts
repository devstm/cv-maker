import { Module } from '@nestjs/common';
import { CertificationsService } from './certifications.service';
import { CertificationsController } from './certifications.controller';
import { certificationsProvider } from './certifications.provider';

@Module({
  controllers: [CertificationsController],
  providers: [...certificationsProvider, CertificationsService],
})
export class CertificationsModule {}
