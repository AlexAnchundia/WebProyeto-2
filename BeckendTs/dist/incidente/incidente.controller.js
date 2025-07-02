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
exports.IncidenteController = void 0;
const common_1 = require("@nestjs/common");
const incidente_service_1 = require("./incidente.service");
const create_incidente_dto_1 = require("./dto/create-incidente.dto");
const update_incidente_dto_1 = require("./dto/update-incidente.dto");
let IncidenteController = class IncidenteController {
    constructor(incidenteService) {
        this.incidenteService = incidenteService;
    }
    create(createIncidenteDto) {
        return this.incidenteService.create(createIncidenteDto);
    }
    findAll() {
        return this.incidenteService.findAll();
    }
    findOne(id) {
        return this.incidenteService.findOne(+id);
    }
    update(id, updateIncidenteDto) {
        return this.incidenteService.update(+id, updateIncidenteDto);
    }
    remove(id) {
        return this.incidenteService.remove(+id);
    }
};
exports.IncidenteController = IncidenteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_incidente_dto_1.CreateIncidenteDto]),
    __metadata("design:returntype", void 0)
], IncidenteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IncidenteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IncidenteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_incidente_dto_1.UpdateIncidenteDto]),
    __metadata("design:returntype", void 0)
], IncidenteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IncidenteController.prototype, "remove", null);
exports.IncidenteController = IncidenteController = __decorate([
    (0, common_1.Controller)('incidente'),
    __metadata("design:paramtypes", [incidente_service_1.IncidenteService])
], IncidenteController);
//# sourceMappingURL=incidente.controller.js.map