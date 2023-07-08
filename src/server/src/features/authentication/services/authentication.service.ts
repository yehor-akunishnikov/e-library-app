import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { UserModelsService } from '../../../entities/user/services/user-models/user-models.service';
import { UserService } from '../../../entities/user/services/user.service';
import { UserPublicData } from '../../../entities/user/models';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly userModelsService: UserModelsService,
  ) {}

  public async validateUser(
    name: string,
    password: string,
  ): Promise<UserPublicData> {
    const user = await this.userService.findOneByName(name);

    if (!user) {
      return null;
    }

    const isValid = bcrypt.compare(password, user.password);

    if (isValid) {
      return this.userModelsService.getPublicUserData(user);
    } else {
      return null;
    }
  }
}
