import { Entity, Column, BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { departments, specialties } from '../../core/fict';

@Entity('superheroes')
export class Superhero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  user_id: number;

  @Column()
  username: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: '' })
  description: string;

  @Column({ enum: Object.keys(specialties) })
  specialty: string;

  @Column({ enum: Object.keys(departments) })
  department: string;

  @Column()
  studyYear: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;
};
