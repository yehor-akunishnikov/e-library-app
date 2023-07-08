import { User } from './user.entity';

export enum ROLE {
  ADMIN = 'ADMIN',
  REGULAR = 'REGULAR',
}

export type UserPublicData = Omit<User, 'password'>;
