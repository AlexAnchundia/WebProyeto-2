"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidenteModule = void 0;
const common_1 = require("@nestjs/common");
const incidente_service_1 = require("./incidente.service");
const incidente_controller_1 = require("./incidente.controller");
const incidente_entity_1 = require("./entities/incidente.entity");
const typeorm_1 = require("@nestjs/typeorm");
let IncidenteModule = class IncidenteModule {
};
exports.IncidenteModule = IncidenteModule;
exports.IncidenteModule = IncidenteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([incidente_entity_1.Incidente])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [incidente_controller_1.IncidenteController],
        providers: [incidente_service_1.IncidenteService],
    })
], IncidenteModule);
//# sourceMappingURL=incidente.module.js.map