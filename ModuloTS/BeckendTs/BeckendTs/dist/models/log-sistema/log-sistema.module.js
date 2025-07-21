"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSistemaModule = void 0;
const common_1 = require("@nestjs/common");
const log_sistema_service_1 = require("./log-sistema.service");
const log_sistema_controller_1 = require("./log-sistema.controller");
const typeorm_1 = require("@nestjs/typeorm");
const log_sistema_entity_1 = require("./entities/log-sistema.entity");
let LogSistemaModule = class LogSistemaModule {
};
exports.LogSistemaModule = LogSistemaModule;
exports.LogSistemaModule = LogSistemaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([log_sistema_entity_1.LogSistema])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [log_sistema_controller_1.LogSistemaController],
        providers: [log_sistema_service_1.LogSistemaService],
    })
], LogSistemaModule);
//# sourceMappingURL=log-sistema.module.js.map