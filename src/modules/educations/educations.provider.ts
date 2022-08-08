import { PROVIDERS } from 'src/common/constants';
import { Education } from './entities/education.model';

export const educationsProvider = [
  {
    provide: PROVIDERS.EDUCATIONS_PROVIDER,
    useValue: Education,
  },
];
