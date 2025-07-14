import { ReporteUsoService } from './reporte-uso.service';
import { CreateReporteUsoDto } from './dto/create-reporte-uso.dto';
import { UpdateReporteUsoDto } from './dto/update-reporte-uso.dto';
export declare class ReporteUsoController {
    private readonly reporteUsoService;
    constructor(reporteUsoService: ReporteUsoService);
    create(createReporteUsoDto: CreateReporteUsoDto): Promise<CreateReporteUsoDto & import("./entities/reporte-uso.entity").ReporteUso>;
    findAll(): Promise<import("./entities/reporte-uso.entity").ReporteUso[]>;
    findOne(id: string): Promise<import("./entities/reporte-uso.entity").ReporteUso>;
    update(id: string, updateReporteUsoDto: UpdateReporteUsoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
