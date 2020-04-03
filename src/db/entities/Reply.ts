import { Entity, Column, BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ResponseGoal } from '../../core/response';

@Entity('replies')
export class Reply extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goal: ResponseGoal;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;
};
