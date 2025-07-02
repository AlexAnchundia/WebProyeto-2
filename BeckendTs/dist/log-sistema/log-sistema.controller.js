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
exports.LogSistemaController = void 0;
const common_1 = require("@nestjs/common");
const log_sistema_service_1 = require("./log-sistema.service");
const create_log_sistema_dto_1 = require("./dto/create-log-sistema.dto");
const update_log_sistema_dto_1 = require("./dto/update-log-sistema.dto");
let LogSistemaController = class LogSistemaController {
    constructor(logSistemaService) {
        this.logSistemaService = logSistemaService;
    }
    create(createLogSistemaDto) {
        return this.logSistemaService.create(createLogSistemaDto);
    }
    findAll() {
        return this.logSistemaService.findAll();
    }
    findOne(id) {
        return this.logSistemaService.findOne(+id);
    }
    update(id, updateLogSistemaDto) {
        return this.logSistemaService.update(+id, updateLogSistemaDto);
    }
    remove(id) {
        return this.logSistemaService.remove(+id);
    }
};
exports.LogSistemaController = LogSistemaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_log_sistema_dto_1.CreateLogSistemaDto]),
    __metadata("design:returntype", void 0)
], LogSistemaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LogSistemaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LogSistemaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_log_sistema_dto_1.UpdateLogSistemaDto]),
    __metadata("design:returntype", void 0)
], LogSistemaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LogSistemaController.prototype, "remove", null);
exports.LogSistemaController = LogSistemaController = __decorate([
    (0, common_1.Controller)('log-sistema'),
    __metadata("design:paramtypes", [log_sistema_service_1.LogSistemaService])
], LogSistemaController);
//# sourceMappingURL=log-sistema.controller.js.map