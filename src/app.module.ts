import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SkillsModule } from './modules/skills/skills.module';

import config from 'config';
import { ExperiencesModule } from './modules/experiences/experiances.module';
import { EducationsModule } from './modules/educations/educations.module';
import { CertificationsModule } from './modules/certifications/certifications.module';
import { ActivitiesModule } from './modules/activities/activities.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    ProfileModule,
    SkillsModule,
    ExperiencesModule,
    EducationsModule,
    CertificationsModule,
    ActivitiesModule,
  ],
})
export class AppModule {}
