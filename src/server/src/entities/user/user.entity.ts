import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

import { ROLE } from './models';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn()
  password: string;

  @PrimaryColumn()
  name: string;

  @PrimaryColumn({ default: ROLE.REGULAR })
  role: ROLE;
}
