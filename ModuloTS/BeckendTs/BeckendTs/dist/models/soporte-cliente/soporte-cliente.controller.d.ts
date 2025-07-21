import { SoporteClienteService } from './soporte-cliente.service';
import { CreateSoporteClienteDto } from './dto/create-soporte-cliente.dto';
import { UpdateSoporteClienteDto } from './dto/update-soporte-cliente.dto';
export declare class SoporteClienteController {
    private readonly soporteClienteService;
    constructor(soporteClienteService: SoporteClienteService);
    create(createSoporteClienteDto: CreateSoporteClienteDto): Promise<CreateSoporteClienteDto & import("./entities/soporte-cliente.entity").SoporteCliente>;
    findAll(): Promise<import("./entities/soporte-cliente.entity").SoporteCliente[]>;
    findOne(id: string): Promise<import("./entities/soporte-cliente.entity").SoporteCliente>;
    update(id: string, updateSoporteClienteDto: UpdateSoporteClienteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
