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
exports.TypeEtatService = void 0;
const app_1 = require("../app");
const TypeEtat_1 = require("../entities/TypeEtat");
const typeEtatRepo = app_1.AppDataSource.getRepository(TypeEtat_1.TypeEtat);
class TypeEtatService {
    save(entity) {
        return typeEtatRepo.save(entity);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return typeEtatRepo.find({ order: { numero: "ASC" } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return typeEtatRepo.delete({ id: id });
        });
    }
}
exports.TypeEtatService = TypeEtatService;
