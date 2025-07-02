"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSoporteClienteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_soporte_cliente_dto_1 = require("./create-soporte-cliente.dto");
class UpdateSoporteClienteDto extends (0, mapped_types_1.PartialType)(create_soporte_cliente_dto_1.CreateSoporteClienteDto) {
}
exports.UpdateSoporteClienteDto = UpdateSoporteClienteDto;
//# sourceMappingURL=update-soporte-cliente.dto.js.map