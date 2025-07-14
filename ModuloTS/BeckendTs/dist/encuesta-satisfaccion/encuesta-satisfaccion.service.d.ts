import { CreateEncuestaSatisfaccionDto } from './dto/create-encuesta-satisfaccion.dto';
import { UpdateEncuestaSatisfaccionDto } from './dto/update-encuesta-satisfaccion.dto';
import { Repository } from 'typeorm';
import { EncuestaSatisfaccion } from './entities/encuesta-satisfaccion.entity';
export declare class EncuestaSatisfaccionService {
    private encuestaRepo;
    constructor(encuestaRepo: Repository<EncuestaSatisfaccion>);
    create(dto: CreateEncuestaSatisfaccionDto): Promise<CreateEncuestaSatisfaccionDto & EncuestaSatisfaccion>;
    findAll(): Promise<EncuestaSatisfaccion[]>;
    findOne(id: number): Promise<EncuestaSatisfaccion>;
    update(id: number, dto: UpdateEncuestaSatisfaccionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
