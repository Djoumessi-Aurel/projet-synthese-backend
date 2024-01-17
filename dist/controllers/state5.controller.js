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
exports.getState5 = void 0;
const types_1 = require("../types");
const RessourceNaturelle_service_1 = require("../services/RessourceNaturelle.service");
const RessourceNaturelleDTO_1 = require("../dto/RessourceNaturelleDTO");
const ressourceService = new RessourceNaturelle_service_1.RessourceNaturelleService();
const getState5 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let code = -1, critere = undefined;
    if (req.query.code_commune) {
        code = parseInt(req.query.code_commune.toString());
        critere = types_1.MyZone.Commune;
    }
    else if (req.query.code_departement) {
        code = parseInt(req.query.code_departement.toString());
        critere = types_1.MyZone.Departement;
    }
    else if (req.query.code_region) {
        code = parseInt(req.query.code_region.toString());
        critere = types_1.MyZone.Region;
    }
    else if (req.query.code_pays) {
        code = parseInt(req.query.code_pays.toString());
        critere = types_1.MyZone.Pays;
    }
    try {
        let ressource = yield ressourceService.findByZone(critere, code);
        let state5 = {
            type_zone: types_1.MyZone[critere],
            code_zone: code,
            listeRessources: ressource.map((value) => { let res = new RessourceNaturelleDTO_1.RessourceNaturelleDTO(value); return res; }),
        };
        res.status(201).json(state5);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getState5 = getState5;
