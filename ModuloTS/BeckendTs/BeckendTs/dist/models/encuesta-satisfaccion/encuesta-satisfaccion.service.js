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
exports.EncuestaSatisfaccionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const encuesta_satisfaccion_entity_1 = require("./entities/encuesta-satisfaccion.entity");
let EncuestaSatisfaccionService = class EncuestaSatisfaccionService {
    constructor(encuestaRepo) {
        this.encuestaRepo = encuestaRepo;
    }
    create(dto) {
        return this.encuestaRepo.save(dto);
    }
    findAll() {
        return this.encuestaRepo.find();
    }
    findOne(id) {
        return this.encuestaRepo.findOneBy({ id_encuesta: id });
    }
    update(id, dto) {
        return this.encuestaRepo.update(id, dto);
    }
    remove(id) {
        return this.encuestaRepo.delete(id);
    }
};
exports.EncuestaSatisfaccionService = EncuestaSatisfaccionService;
exports.EncuestaSatisfaccionService = EncuestaSatisfaccionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(encuesta_satisfaccion_entity_1.EncuestaSatisfaccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EncuestaSatisfaccionService);
//# sourceMappingURL=encuesta-satisfaccion.service.js.map