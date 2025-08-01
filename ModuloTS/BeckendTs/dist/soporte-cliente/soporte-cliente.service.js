"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoporteClienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const soporte_cliente_entity_1 = require("./entities/soporte-cliente.entity");
let SoporteClienteService = class SoporteClienteService {
    constructor(soporteRepo) {
        this.soporteRepo = soporteRepo;
    }
    create(dto) {
        return this.soporteRepo.save(dto);
    }
    findAll() {
        return this.soporteRepo.find();
    }
    findOne(id) {
        return this.soporteRepo.findOneBy({ id_soporte: id });
    }
    update(id, dto) {
        return this.soporteRepo.update(id, dto);
    }
    remove(id) {
        return this.soporteRepo.delete(id);
    }
};
exports.SoporteClienteService = SoporteClienteService;
exports.SoporteClienteService = SoporteClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(soporte_cliente_entity_1.SoporteCliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SoporteClienteService);
//# sourceMappingURL=soporte-cliente.service.js.map