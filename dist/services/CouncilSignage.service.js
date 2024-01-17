"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouncilSignageService = void 0;
const app_1 = require("../app");
const CouncilSignage_1 = require("../entities/CouncilSignage");
const CommuneCode_service_1 = require("./CommuneCode.service");
const typeorm_1 = require("typeorm");
const councilSignage = app_1.AppDataSource.getRepository(CouncilSignage_1.CouncilSignage);
const ccService = new CommuneCode_service_1.CommuneCodeService();
class CouncilSignageService {
    save(entity) {
        return councilSignage.save(entity);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return councilSignage.find();
        });
    }
    findByZone(type_zone, code_zone) {
        return __awaiter(this, void 0, void 0, function* () {
            let code_list = yield ccService.getCommuneCodeByTypeZone(type_zone, code_zone);
            return councilSignage.findBy({
                code_commune: (0, typeorm_1.In)(code_list)
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return councilSignage.delete({ id: id });
        });
    }
}
exports.CouncilSignageService = CouncilSignageService;
