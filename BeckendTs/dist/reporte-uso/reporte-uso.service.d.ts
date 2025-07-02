import { Repository } from 'typeorm';
import { ReporteUso } from './entities/reporte-uso.entity';
import { CreateReporteUsoDto } from './dto/create-reporte-uso.dto';
import { UpdateReporteUsoDto } from './dto/update-reporte-uso.dto';
export declare class ReporteUsoService {
    private reporteRepo;
    constructor(reporteRepo: Repository<ReporteUso>);
    create(dto: CreateReporteUsoDto): Promise<CreateReporteUsoDto & ReporteUso>;
    findAll(): Promise<ReporteUso[]>;
    findOne(id: number): Promise<ReporteUso>;
    update(id: number, dto: UpdateReporteUsoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
