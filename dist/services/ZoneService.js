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
exports.ZoneService = void 0;
const app_1 = require("../app");
const types_1 = require("../types");
const Zone_1 = require("../entities/Zone");
const zoneRepo = app_1.AppDataSource.getRepository(Zone_1.Zone);
class ZoneService {
    save(entity) {
        return zoneRepo.save(entity);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield zoneRepo.find();
        });
    }
    findByCommune(code_commune) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield zoneRepo.find({ where: { code_commune } });
        });
    }
    findByDepartement(code_departement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield zoneRepo.find({ where: { code_departement } });
        });
    }
    findByRegion(code_region) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield zoneRepo.find({ where: { code_region } });
        });
    }
    findByPays(code_pays) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield zoneRepo.find({ where: { code_pays } });
        });
    }
    findByTypeZone(type_zone, code_zone) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (type_zone) {
                case types_1.MyZone.Commune:
                    return this.findByCommune(code_zone);
                case types_1.MyZone.Departement:
                    return this.findByDepartement(code_zone);
                case types_1.MyZone.Region:
                    return this.findByRegion(code_zone);
                case types_1.MyZone.Pays:
                    return this.findByPays(code_zone);
                default:
                    return this.findAll();
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return zoneRepo.delete({ id: id });
        });
    }
}
exports.ZoneService = ZoneService;
