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
exports.saveState3 = exports.getAllState3 = exports.getState3 = void 0;
const state3_service_1 = require("../services/state3.service");
const State3_1 = require("../entities/State3");
const functions_1 = require("../functions");
const types_1 = require("../types");
const state3Service = new state3_service_1.State3Service();
let list;
const getState3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        list = yield state3Service.findByZone(critere, code);
        let state3 = {
            type_zone: types_1.MyZone[critere],
            code_zone: code,
            list: list
        };
        res.status(200).json(state3);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getState3 = getState3;
const getAllState3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    list = yield state3Service.findAll();
    try {
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getAllState3 = getAllState3;
const saveState3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { start, end, name, occupation, code_commune } = req.body;
    if ((0, functions_1.estNullUndefinedOuVide)(start) ||
        (0, functions_1.estNullUndefinedOuVide)(end) ||
        (0, functions_1.estNullUndefinedOuVide)(name) ||
        (0, functions_1.estNullUndefinedOuVide)(occupation) ||
        (0, functions_1.estNullUndefinedOuVide)(code_commune)) {
        res.status(401).json("Veuillez remplir tous les champs");
        return;
    }
    try {
        let mayor = new State3_1.State3(name, start, end, occupation, code_commune);
        let saved = yield state3Service.save(mayor);
        res.status(200).json(saved);
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveState3 = saveState3;
