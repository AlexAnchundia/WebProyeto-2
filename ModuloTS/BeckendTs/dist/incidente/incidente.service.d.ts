import { Repository } from 'typeorm';
import { Incidente } from './entities/incidente.entity';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
export declare class IncidenteService {
    private incidenteRepo;
    constructor(incidenteRepo: Repository<Incidente>);
    create(dto: CreateIncidenteDto): Promise<CreateIncidenteDto & Incidente>;
    findAll(): Promise<Incidente[]>;
    findOne(id: number): Promise<Incidente>;
    update(id: number, dto: UpdateIncidenteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
