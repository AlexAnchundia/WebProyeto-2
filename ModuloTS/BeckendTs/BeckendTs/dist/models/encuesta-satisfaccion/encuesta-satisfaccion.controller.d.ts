import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';
import { CreateEncuestaSatisfaccionDto } from './dto/create-encuesta-satisfaccion.dto';
import { UpdateEncuestaSatisfaccionDto } from './dto/update-encuesta-satisfaccion.dto';
export declare class EncuestaSatisfaccionController {
    private readonly encuestaSatisfaccionService;
    constructor(encuestaSatisfaccionService: EncuestaSatisfaccionService);
    create(createEncuestaSatisfaccionDto: CreateEncuestaSatisfaccionDto): Promise<CreateEncuestaSatisfaccionDto & import("./entities/encuesta-satisfaccion.entity").EncuestaSatisfaccion>;
    findAll(): Promise<import("./entities/encuesta-satisfaccion.entity").EncuestaSatisfaccion[]>;
    findOne(id: string): Promise<import("./entities/encuesta-satisfaccion.entity").EncuestaSatisfaccion>;
    update(id: string, updateEncuestaSatisfaccionDto: UpdateEncuestaSatisfaccionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
