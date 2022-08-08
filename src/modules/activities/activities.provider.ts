import { PROVIDERS } from 'src/common/constants';
import { Activity } from './entities/activity.model';

export const activitiesProvider = [
  {
    provide: PROVIDERS.ACTIVITIES_PROVIDER,
    useValue: Activity,
  },
];
