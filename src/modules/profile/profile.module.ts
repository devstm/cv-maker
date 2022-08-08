import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { profileProvider } from './profile.provider';

@Module({
  controllers: [ProfileController],
  providers: [...profileProvider, ProfileService],
})
export class ProfileModule {}
