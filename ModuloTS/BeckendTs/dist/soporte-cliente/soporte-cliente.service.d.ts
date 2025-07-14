import { Repository } from 'typeorm';
import { SoporteCliente } from './entities/soporte-cliente.entity';
import { CreateSoporteClienteDto } from './dto/create-soporte-cliente.dto';
import { UpdateSoporteClienteDto } from './dto/update-soporte-cliente.dto';
export declare class SoporteClienteService {
    private soporteRepo;
    constructor(soporteRepo: Repository<SoporteCliente>);
    create(dto: CreateSoporteClienteDto): Promise<CreateSoporteClienteDto & SoporteCliente>;
    findAll(): Promise<SoporteCliente[]>;
    findOne(id: number): Promise<SoporteCliente>;
    update(id: number, dto: UpdateSoporteClienteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
