import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';
import { Profiles } from 'src/modules/profile/entities/profile.model';

@Table({
  tableName: 'Skills',
  underscored: true,
})
export class Skills extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Unique
  @Column(DataType.STRING)
  description: string;

  @Column(DataType.STRING)
  createdBy: string;

  @Column(DataType.STRING)
  updatedBy: string;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;

  @Column(DataType.DATE)
  deletedAt: Date;

  @Column(DataType.STRING)
  deletedBy: string;

  @BelongsToMany(() => Profiles, () => ProfilesSkills)
  profiles: Profiles[];
}

@Table({
  tableName: 'profilesskills',
  underscored: true,
  timestamps: false,
})
export class ProfilesSkills extends Model {
  @ForeignKey(() => Profiles)
  @Column
  profileId: number;

  @ForeignKey(() => Skills)
  @Column
  skillId: number;

  @Column
  rate: number;
}
