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
exports.ProblemeRessourceNaturelleService = void 0;
const app_1 = require("../app");
const ProblemeRessourceNaturelle_1 = require("../entities/ProblemeRessourceNaturelle");
const types_1 = require("../types");
const problemeRepo = app_1.AppDataSource.getRepository(ProblemeRessourceNaturelle_1.ProblemeRessourceNaturelle);
class ProblemeRessourceNaturelleService {
    save(entity) {
        return problemeRepo.save(entity);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield problemeRepo.find();
        });
    }
    findByCommune(commune) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield problemeRepo.find({ where: { commune: commune } });
        });
    }
    findByDepartement(departement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield problemeRepo.find({ where: { departement } });
        });
    }
    findByRegion(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield problemeRepo.find({ where: { region } });
        });
    }
    findByZone(zone, nom_zone) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (zone) {
                case types_1.MyZone.Commune:
                    return this.findByCommune(nom_zone);
                case types_1.MyZone.Departement:
                    return this.findByDepartement(nom_zone);
                case types_1.MyZone.Region:
                    this.findByRegion(nom_zone);
                default:
                    return this.findAll();
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return problemeRepo.delete({ id: id });
        });
    }
}
exports.ProblemeRessourceNaturelleService = ProblemeRessourceNaturelleService;
