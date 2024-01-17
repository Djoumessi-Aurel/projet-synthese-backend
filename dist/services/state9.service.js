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
exports.State9Service = void 0;
const typeorm_1 = require("typeorm");
const app_1 = require("../app");
const entities_1 = require("../entities");
const CommuneCode_service_1 = require("./CommuneCode.service");
const ccService = new CommuneCode_service_1.CommuneCodeService();
const state9Repository = app_1.AppDataSource.getRepository(entities_1.State9);
class State9Service {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield state9Repository.find();
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield state9Repository.save(entity);
        });
    }
    findByZone(critere, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let code_list = yield ccService.getCommuneCodeByTypeZone(critere, code);
            return yield state9Repository.findBy({
                code_commune: (0, typeorm_1.In)(code_list)
            });
        });
    }
}
exports.State9Service = State9Service;
