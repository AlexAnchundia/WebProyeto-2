import { Test, TestingModule } from '@nestjs/testing';
import { SoporteClienteService } from './soporte-cliente.service';

describe('SoporteClienteService', () => {
  let service: SoporteClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SoporteClienteService,
        {
          provide: 'SoporteClienteRepository',
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SoporteClienteService>(SoporteClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});