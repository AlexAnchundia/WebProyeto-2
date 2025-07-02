import { Test, TestingModule } from '@nestjs/testing';
import { IncidenteService } from './incidente.service';

describe('IncidenteService', () => {
  let service: IncidenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IncidenteService,
        {
          provide: 'IncidenteRepository',
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<IncidenteService>(IncidenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
