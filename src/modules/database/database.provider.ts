import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

import { PROVIDERS, CONFIG } from '../../common/constants';
import { Activity } from '../activities/entities/activity.model';
import { Certification } from '../certifications/entities/certification.model';
import { Education } from '../educations/entities/education.model';
import { Experiences } from '../experiences/entities/experiences.model';
import { Profiles } from '../profile/entities/profile.model';
import { ProfilesSkills, Skills } from '../skills/entities/skill.model';

import { Users } from '../user/user.model';

export const databaseProviders = [
  {
    provide: PROVIDERS.DATABASE_PROVIDER,
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(CONFIG.DATABASE),
      });
      sequelize.addModels([
        Users,
        Profiles,
        ProfilesSkills,
        Skills,
        Experiences,
        Education,
        Certification,
        Activity,
      ]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
