import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';


describe('EncuestaSatisfaccionService', () => {
  let service: EncuestaSatisfaccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EncuestaSatisfaccionService,
        {
          provide: 'EncuestaSatisfaccionRepository',
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<EncuestaSatisfaccionService>(EncuestaSatisfaccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
