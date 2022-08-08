import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillsProvider } from './skills.providers';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService, ...skillsProvider],
})
export class SkillsModule {}
