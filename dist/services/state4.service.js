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
exports.State4Service = void 0;
const app_1 = require("../app");
const State4_1 = require("../entities/State4");
const CommuneCode_service_1 = require("./CommuneCode.service");
const typeorm_1 = require("typeorm");
const ccService = new CommuneCode_service_1.CommuneCodeService();
const state4repo = app_1.AppDataSource.getRepository(State4_1.State4);
class State4Service {
    findByZone(critere, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let code_list = yield ccService.getCommuneCodeByTypeZone(critere, code);
            return yield state4repo.findBy({
                code_commune: (0, typeorm_1.In)(code_list)
            });
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield state4repo.save(entity);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield state4repo.find();
        });
    }
    findByCouncil(council) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield state4repo.findOne({ where: { code_commune: council } });
        });
    }
}
exports.State4Service = State4Service;
