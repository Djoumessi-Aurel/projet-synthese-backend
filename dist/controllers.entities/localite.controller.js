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
exports.getLocaliteById = exports.getLocalite = void 0;
const Localite_1 = require("../entities/Localite");
const app_1 = require("../app");
const types_1 = require("../types");
const localiteRepo = app_1.AppDataSource.getRepository(Localite_1.Localite);
const getLocalite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let code = -1, critere = undefined;
    if (req.query.code_localite) {
        code = parseInt(req.query.code_localite.toString());
        critere = types_1.MyZone.Localite;
    }
    else if (req.query.code_commune) {
        code = parseInt(req.query.code_commune.toString());
        critere = types_1.MyZone.Commune;
    }
    try {
        if (critere == types_1.MyZone.Localite) {
            let localite = yield localiteRepo.findOne({ where: { code_localite: code } });
            res.status(201).json(localite);
        }
        else if (critere == types_1.MyZone.Commune) {
            let listeLocalite = yield localiteRepo.find({ where: { code_commune: code } });
            res.status(201).json(listeLocalite);
        }
        else {
            let listeLocalite = yield localiteRepo.find();
            res.status(201).json(listeLocalite);
        }
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getLocalite = getLocalite;
const getLocaliteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let localite = yield localiteRepo.findOne({ where: { id: req.params.id } });
        res.status(201).json(localite);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getLocaliteById = getLocaliteById;
