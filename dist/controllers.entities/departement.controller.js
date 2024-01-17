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
exports.getDepartementById = exports.getDepartement = void 0;
const Departement_1 = require("../entities/Departement");
const app_1 = require("../app");
const types_1 = require("../types");
const departementRepo = app_1.AppDataSource.getRepository(Departement_1.Departement);
const getDepartement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let code = -1, critere = undefined;
    if (req.query.code_departement) {
        code = parseInt(req.query.code_departement.toString());
        critere = types_1.MyZone.Departement;
    }
    else if (req.query.code_region) {
        code = parseInt(req.query.code_region.toString());
        critere = types_1.MyZone.Region;
    }
    try {
        if (critere == types_1.MyZone.Departement) {
            let departement = yield departementRepo.findOne({ where: { code_departement: code } });
            res.status(201).json(departement);
        }
        else if (critere == types_1.MyZone.Region) {
            let listeDepartement = yield departementRepo.find({ where: { code_region: code } });
            res.status(201).json(listeDepartement);
        }
        else {
            let listeDepartement = yield departementRepo.find();
            res.status(201).json(listeDepartement);
        }
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getDepartement = getDepartement;
const getDepartementById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let departement = yield departementRepo.findOne({ where: { id: req.params.id } });
        res.status(201).json(departement);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getDepartementById = getDepartementById;
