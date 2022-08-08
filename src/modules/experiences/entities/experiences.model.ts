import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Profiles } from 'src/modules/profile/entities/profile.model';

@Table({
  tableName: 'Experiences',
  underscored: true,
})
export class Experiences extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Profiles)
  @Column(DataType.INTEGER)
  profileId: number;

  @Column(DataType.STRING)
  company: string;

  @Column(DataType.STRING)
  position: string;

  @Column(DataType.STRING)
  startAt: string;

  @Column(DataType.STRING)
  endAt?: string;

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

  @BelongsTo(() => Profiles)
  profiles: Profiles;
}
