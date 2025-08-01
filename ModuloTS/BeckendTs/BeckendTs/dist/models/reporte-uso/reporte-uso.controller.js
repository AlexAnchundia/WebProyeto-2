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
exports.ReporteUsoController = void 0;
const common_1 = require("@nestjs/common");
const reporte_uso_service_1 = require("./reporte-uso.service");
const create_reporte_uso_dto_1 = require("./dto/create-reporte-uso.dto");
const update_reporte_uso_dto_1 = require("./dto/update-reporte-uso.dto");
let ReporteUsoController = class ReporteUsoController {
    constructor(reporteUsoService) {
        this.reporteUsoService = reporteUsoService;
    }
    create(createReporteUsoDto) {
        return this.reporteUsoService.create(createReporteUsoDto);
    }
    findAll() {
        return this.reporteUsoService.findAll();
    }
    findOne(id) {
        return this.reporteUsoService.findOne(+id);
    }
    update(id, updateReporteUsoDto) {
        return this.reporteUsoService.update(+id, updateReporteUsoDto);
    }
    remove(id) {
        return this.reporteUsoService.remove(+id);
    }
};
exports.ReporteUsoController = ReporteUsoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reporte_uso_dto_1.CreateReporteUsoDto]),
    __metadata("design:returntype", void 0)
], ReporteUsoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReporteUsoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReporteUsoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reporte_uso_dto_1.UpdateReporteUsoDto]),
    __metadata("design:returntype", void 0)
], ReporteUsoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReporteUsoController.prototype, "remove", null);
exports.ReporteUsoController = ReporteUsoController = __decorate([
    (0, common_1.Controller)('reporte-uso'),
    __metadata("design:paramtypes", [reporte_uso_service_1.ReporteUsoService])
], ReporteUsoController);
//# sourceMappingURL=reporte-uso.controller.js.map