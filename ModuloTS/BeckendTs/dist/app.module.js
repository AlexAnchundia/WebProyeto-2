"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const encuesta_satisfaccion_module_1 = require("./encuesta-satisfaccion/encuesta-satisfaccion.module");
const incidente_module_1 = require("./incidente/incidente.module");
const log_sistema_module_1 = require("./log-sistema/log-sistema.module");
const reporte_uso_module_1 = require("./reporte-uso/reporte-uso.module");
const soporte_cliente_module_1 = require("./soporte-cliente/soporte-cliente.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'aws-0-us-east-2.pooler.supabase.com',
                port: 5432,
                username: 'postgres.rzsevfnnpelnfwdeyfgs',
                password: '4k3yMNj4OtciSHRE',
                database: 'postgres',
                autoLoadEntities: true,
                synchronize: true,
                ssl: {
                    rejectUnauthorized: false,
                },
            }),
            encuesta_satisfaccion_module_1.EncuestaSatisfaccionModule,
            incidente_module_1.IncidenteModule,
            log_sistema_module_1.LogSistemaModule,
            reporte_uso_module_1.ReporteUsoModule,
            soporte_cliente_module_1.SoporteClienteModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map