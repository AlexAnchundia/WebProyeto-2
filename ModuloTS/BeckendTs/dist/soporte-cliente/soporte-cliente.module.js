"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoporteClienteModule = void 0;
const common_1 = require("@nestjs/common");
const soporte_cliente_service_1 = require("./soporte-cliente.service");
const soporte_cliente_controller_1 = require("./soporte-cliente.controller");
const soporte_cliente_entity_1 = require("./entities/soporte-cliente.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SoporteClienteModule = class SoporteClienteModule {
};
exports.SoporteClienteModule = SoporteClienteModule;
exports.SoporteClienteModule = SoporteClienteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([soporte_cliente_entity_1.SoporteCliente])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [soporte_cliente_controller_1.SoporteClienteController],
        providers: [soporte_cliente_service_1.SoporteClienteService],
    })
], SoporteClienteModule);
//# sourceMappingURL=soporte-cliente.module.js.map