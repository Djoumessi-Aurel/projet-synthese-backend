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
exports.CommuneCodeService = void 0;
const app_1 = require("../app");
const types_1 = require("../types");
const Zone_1 = require("../entities/Zone");
const zoneRepo = app_1.AppDataSource.getRepository(Zone_1.Zone);
class CommuneCodeService {
    getCommuneCodeByDepartement(code_departement) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericFunction({ code_departement });
        });
    }
    getCommuneCodeByRegion(code_region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericFunction({ code_region });
        });
    }
    getCommuneCodeByPays(code_pays) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericFunction({ code_pays });
        });
    }
    genericFunction(critere) {
        return __awaiter(this, void 0, void 0, function* () {
            let zones = yield zoneRepo.createQueryBuilder("zone").where(critere)
                .distinctOn(['zone.code_commune'])
                .select(['zone.code_commune']).getMany();
            return zones.map((value) => value.code_commune);
        });
    }
    getCommuneCodeByTypeZone(type_zone, code_zone) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (type_zone) {
                case types_1.MyZone.Commune:
                    return [code_zone];
                case types_1.MyZone.Departement:
                    return this.getCommuneCodeByDepartement(code_zone);
                case types_1.MyZone.Region:
                    return this.getCommuneCodeByRegion(code_zone);
                case types_1.MyZone.Pays:
                    return this.getCommuneCodeByPays(code_zone);
                default:
                    return [];
            }
        });
    }
}
exports.CommuneCodeService = CommuneCodeService;
