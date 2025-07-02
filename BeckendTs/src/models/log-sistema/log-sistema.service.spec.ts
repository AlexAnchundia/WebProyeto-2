import { Test, TestingModule } from '@nestjs/testing';
import { LogSistemaService } from './log-sistema.service';

describe('LogSistemaService', () => {
  let service: LogSistemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogSistemaService,
        {
          provide: 'LogSistemaRepository',
          useValue: {
            findAll: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<LogSistemaService>(LogSistemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
