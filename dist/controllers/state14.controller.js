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
exports.state14 = exports.saveState14 = exports.getState14 = void 0;
const services_1 = require("../services");
const entities_1 = require("../entities");
const types_1 = require("../types");
const state14Service = new services_1.State14Service();
let list;
const getState14 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        list = yield state14Service.findByZone(critere, code);
        let state = {
            type_zone: types_1.MyZone[critere],
            code_zone: code,
            list: list
        };
        res.status(200).json(state);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getState14 = getState14;
const saveState14 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { aspectAnalyse, contraintes, opportunites, faiblesses, forces, solutions, code_commune } = req.body;
    try {
        let state14 = new entities_1.State14(aspectAnalyse, contraintes, opportunites, faiblesses, forces, solutions, code_commune);
        let saved = yield state14Service.save(state14);
        res.status(201).json(saved);
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveState14 = saveState14;
const state14 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let list = yield state14Service.findAll();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
    }
});
exports.state14 = state14;
