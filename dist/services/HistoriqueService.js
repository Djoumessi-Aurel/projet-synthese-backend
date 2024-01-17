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
exports.HistoriqueService = void 0;
const app_1 = require("../app");
const Historique_1 = require("../entities/Historique");
const histRepo = app_1.AppDataSource.getRepository(Historique_1.Historique);
class HistoriqueService {
    save(entity) {
        return histRepo.save(entity);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield histRepo.find({ order: { date_creation: "DESC" } });
        });
    }
    findByCodeZone(code_zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield histRepo.find({ where: { code_zone }, order: { date_creation: "DESC" } });
        });
    }
    findByTypeZone(type_zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield histRepo.find({ where: { type_zone }, order: { date_creation: "DESC" } });
        });
    }
    findByNumeroEtat(numero_etat) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield histRepo.find({ where: { numero_etat }, order: { date_creation: "DESC" } });
        });
    }
    findByUtilisateur(utilisateur) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield histRepo.find({ where: { utilisateur }, order: { date_creation: "DESC" } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return histRepo.delete({ id: id });
        });
    }
}
exports.HistoriqueService = HistoriqueService;
