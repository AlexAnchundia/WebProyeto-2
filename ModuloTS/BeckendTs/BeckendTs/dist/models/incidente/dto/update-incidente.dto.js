"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIncidenteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_incidente_dto_1 = require("./create-incidente.dto");
class UpdateIncidenteDto extends (0, mapped_types_1.PartialType)(create_incidente_dto_1.CreateIncidenteDto) {
}
exports.UpdateIncidenteDto = UpdateIncidenteDto;
//# sourceMappingURL=update-incidente.dto.js.map