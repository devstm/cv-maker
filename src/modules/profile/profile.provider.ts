import { PROVIDERS } from 'src/common/constants';
import { Profiles } from './entities/profile.model';

export const profileProvider = [
  {
    provide: PROVIDERS.PROFILES_PROVIDER,
    useValue: Profiles,
  },
];
