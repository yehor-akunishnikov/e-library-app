import { Injectable } from '@nestjs/common';

import { UserPublicData } from '../../models';
import { User } from '../../user.entity';

@Injectable()
export class UserModelsService {
  public getPublicUserData(user: User): UserPublicData {
    const { password, ...userPublicData } = user;

    return userPublicData;
  }
}
