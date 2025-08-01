"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaSatisfaccionModule = void 0;
const common_1 = require("@nestjs/common");
const encuesta_satisfaccion_service_1 = require("./encuesta-satisfaccion.service");
const encuesta_satisfaccion_controller_1 = require("./encuesta-satisfaccion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const encuesta_satisfaccion_entity_1 = require("./entities/encuesta-satisfaccion.entity");
let EncuestaSatisfaccionModule = class EncuestaSatisfaccionModule {
};
exports.EncuestaSatisfaccionModule = EncuestaSatisfaccionModule;
exports.EncuestaSatisfaccionModule = EncuestaSatisfaccionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([encuesta_satisfaccion_entity_1.EncuestaSatisfaccion])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [encuesta_satisfaccion_controller_1.EncuestaSatisfaccionController],
        providers: [encuesta_satisfaccion_service_1.EncuestaSatisfaccionService],
    })
], EncuestaSatisfaccionModule);
//# sourceMappingURL=encuesta-satisfaccion.module.js.map