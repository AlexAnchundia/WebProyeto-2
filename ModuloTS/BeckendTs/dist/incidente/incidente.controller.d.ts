import { IncidenteService } from './incidente.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
export declare class IncidenteController {
    private readonly incidenteService;
    constructor(incidenteService: IncidenteService);
    create(createIncidenteDto: CreateIncidenteDto): Promise<CreateIncidenteDto & import("./entities/incidente.entity").Incidente>;
    findAll(): Promise<import("./entities/incidente.entity").Incidente[]>;
    findOne(id: string): Promise<import("./entities/incidente.entity").Incidente>;
    update(id: string, updateIncidenteDto: UpdateIncidenteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
