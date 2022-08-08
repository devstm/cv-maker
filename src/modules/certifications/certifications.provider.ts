import { PROVIDERS } from 'src/common/constants';
import { Certification } from './entities/certification.model';

export const certificationsProvider = [
  {
    provide: PROVIDERS.CERTIFICATIONS_PROVIDER,
    useValue: Certification,
  },
];
