import { PROVIDERS } from 'src/common/constants';
import { Skills } from './entities/skill.model';

export const skillsProvider = [
  {
    provide: PROVIDERS.SKILLS_PROVIDER,
    useValue: Skills,
  },
];
