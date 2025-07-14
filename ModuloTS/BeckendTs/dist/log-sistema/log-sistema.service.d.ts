import { Repository } from 'typeorm';
import { LogSistema } from './entities/log-sistema.entity';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { UpdateLogSistemaDto } from './dto/update-log-sistema.dto';
export declare class LogSistemaService {
    private logRepo;
    constructor(logRepo: Repository<LogSistema>);
    create(dto: CreateLogSistemaDto): Promise<CreateLogSistemaDto & LogSistema>;
    findAll(): Promise<LogSistema[]>;
    findOne(id: number): Promise<LogSistema>;
    update(id: number, dto: UpdateLogSistemaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
