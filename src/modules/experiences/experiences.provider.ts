import { PROVIDERS } from 'src/common/constants';
import { Experiences } from './entities/experiences.model';

export const experiencesProvider = [
  {
    provide: PROVIDERS.EXPERIENCES_PROVIDER,
    useValue: Experiences,
  },
];
