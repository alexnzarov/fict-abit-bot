import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { User as IUser } from 'telegram-typings';
import escape from 'escape-html';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  beenWelcomed: boolean;

  getName() {
    return !this.lastName ? this.firstName : `${this.firstName} ${this.lastName}`;
  }

  getTag() {
    const name = this.username ? `@${this.username}` : this.getName();
    return `<a href="tg://user?id=${this.id}">${escape(name)}</a>`;
  }

  public static default(user: IUser) {
    return User.create({
      id: user.id, 
      username: user.username, 
      firstName: user.first_name, 
      lastName: user.last_name,
    }).save();
  }
};