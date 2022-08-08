import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import {
  ProfilesSkills,
  Skills,
} from 'src/modules/skills/entities/skill.model';
import { Users } from 'src/modules/user/user.model';

@Table({
  tableName: 'Profiles',
  underscored: true,
})
export class Profiles extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Users)
  @Column(DataType.INTEGER)
  userId: number;

  @Column(DataType.STRING)
  bio: string;

  @Column(DataType.STRING)
  avatar: string;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  middleName?: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  createdBy: number;

  @Column(DataType.STRING)
  updatedBy: number;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;

  @Column(DataType.DATE)
  deletedAt: Date;

  @Column(DataType.STRING)
  deletedBy: string;

  @BelongsTo(() => Users)
  user: Users;

  @BelongsToMany(() => Skills, () => ProfilesSkills)
  skills: Skills[];
}
