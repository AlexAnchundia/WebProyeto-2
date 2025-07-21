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
exports.SoporteClienteController = void 0;
const common_1 = require("@nestjs/common");
const soporte_cliente_service_1 = require("./soporte-cliente.service");
const create_soporte_cliente_dto_1 = require("./dto/create-soporte-cliente.dto");
const update_soporte_cliente_dto_1 = require("./dto/update-soporte-cliente.dto");
let SoporteClienteController = class SoporteClienteController {
    constructor(soporteClienteService) {
        this.soporteClienteService = soporteClienteService;
    }
    create(createSoporteClienteDto) {
        return this.soporteClienteService.create(createSoporteClienteDto);
    }
    findAll() {
        return this.soporteClienteService.findAll();
    }
    findOne(id) {
        return this.soporteClienteService.findOne(+id);
    }
    update(id, updateSoporteClienteDto) {
        return this.soporteClienteService.update(+id, updateSoporteClienteDto);
    }
    remove(id) {
        return this.soporteClienteService.remove(+id);
    }
};
exports.SoporteClienteController = SoporteClienteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_soporte_cliente_dto_1.CreateSoporteClienteDto]),
    __metadata("design:returntype", void 0)
], SoporteClienteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SoporteClienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoporteClienteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_soporte_cliente_dto_1.UpdateSoporteClienteDto]),
    __metadata("design:returntype", void 0)
], SoporteClienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoporteClienteController.prototype, "remove", null);
exports.SoporteClienteController = SoporteClienteController = __decorate([
    (0, common_1.Controller)('soporte-cliente'),
    __metadata("design:paramtypes", [soporte_cliente_service_1.SoporteClienteService])
], SoporteClienteController);
//# sourceMappingURL=soporte-cliente.controller.js.map