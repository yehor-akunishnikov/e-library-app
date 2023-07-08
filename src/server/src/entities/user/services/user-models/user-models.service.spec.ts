import { Test, TestingModule } from '@nestjs/testing';
import { UserModelsService } from './user-models.service';

describe('UserModelsService', () => {
  let service: UserModelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserModelsService],
    }).compile();

    service = module.get<UserModelsService>(UserModelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
