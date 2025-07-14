import { LogSistemaService } from './log-sistema.service';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { UpdateLogSistemaDto } from './dto/update-log-sistema.dto';
export declare class LogSistemaController {
    private readonly logSistemaService;
    constructor(logSistemaService: LogSistemaService);
    create(createLogSistemaDto: CreateLogSistemaDto): Promise<CreateLogSistemaDto & import("./entities/log-sistema.entity").LogSistema>;
    findAll(): Promise<import("./entities/log-sistema.entity").LogSistema[]>;
    findOne(id: string): Promise<import("./entities/log-sistema.entity").LogSistema>;
    update(id: string, updateLogSistemaDto: UpdateLogSistemaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
