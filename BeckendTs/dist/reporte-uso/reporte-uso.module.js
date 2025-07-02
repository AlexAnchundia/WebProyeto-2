"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteUsoModule = void 0;
const common_1 = require("@nestjs/common");
const reporte_uso_service_1 = require("./reporte-uso.service");
const reporte_uso_controller_1 = require("./reporte-uso.controller");
const typeorm_1 = require("@nestjs/typeorm");
const reporte_uso_entity_1 = require("./entities/reporte-uso.entity");
let ReporteUsoModule = class ReporteUsoModule {
};
exports.ReporteUsoModule = ReporteUsoModule;
exports.ReporteUsoModule = ReporteUsoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reporte_uso_entity_1.ReporteUso])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [reporte_uso_controller_1.ReporteUsoController],
        providers: [reporte_uso_service_1.ReporteUsoService],
    })
], ReporteUsoModule);
//# sourceMappingURL=reporte-uso.module.js.map