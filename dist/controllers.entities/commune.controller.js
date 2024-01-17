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
exports.getCommuneById = exports.getCommune = void 0;
const Commune_1 = require("../entities/Commune");
const app_1 = require("../app");
const types_1 = require("../types");
const communeRepo = app_1.AppDataSource.getRepository(Commune_1.Commune);
const getCommune = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let code = -1, critere = undefined;
    if (req.query.code_commune) {
        code = parseInt(req.query.code_commune.toString());
        critere = types_1.MyZone.Commune;
    }
    else if (req.query.code_departement) {
        code = parseInt(req.query.code_departement.toString());
        critere = types_1.MyZone.Departement;
    }
    try {
        if (critere == types_1.MyZone.Commune) {
            let commune = yield communeRepo.findOne({ where: { code_commune: code } });
            res.status(201).json(commune);
        }
        else if (critere == types_1.MyZone.Departement) {
            let listeCommune = yield communeRepo.find({ where: { code_departement: code } });
            res.status(201).json(listeCommune);
        }
        else {
            let listeCommune = yield communeRepo.find();
            res.status(201).json(listeCommune);
        }
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getCommune = getCommune;
const getCommuneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let commune = yield communeRepo.findOne({ where: { id: req.params.id } });
        res.status(201).json(commune);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getCommuneById = getCommuneById;
