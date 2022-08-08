import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/common/constants';
import { Users } from '../user/user.model';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profiles } from './entities/profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @Inject(PROVIDERS.PROFILES_PROVIDER)
    private readonly profilesRepository: typeof Profiles,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profiles> {
    const profile: any = await this.profilesRepository.create({
      ...createProfileDto,
    });
    return profile;
  }

  findByUserName(username: string): Promise<Profiles[]> {
    const profile = this.profilesRepository.findAll({
      include: [
        {
          model: Users,
          where: { username },
          attributes: ['id', 'username', 'email'],
        },
      ],
    });
    return profile;
  }

  findByUserId(id: number): Promise<Profiles[]> {
    const profile = this.profilesRepository.findAll({
      include: [
        {
          model: Users,
          where: { id },
          attributes: ['id', 'username', 'email'],
        },
      ],
    });
    return profile;
  }

  findOne(id: number) {
    const profile = this.profilesRepository.findOne({
      where: { id },
      include: [
        {
          model: Users,
          attributes: ['id', 'username', 'email'],
        },
      ],
    });
    return profile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = this.profilesRepository.update(
      { ...updateProfileDto },
      { where: { id } },
    );
    return profile;
  }

  remove(id: number) {
    return this.profilesRepository.destroy({ where: { id } });
  }
}
