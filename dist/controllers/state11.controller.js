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
exports.state11 = exports.saveState11 = exports.getState11 = void 0;
const services_1 = require("../services");
const entities_1 = require("../entities");
const types_1 = require("../types");
const state11Service = new services_1.State11Service();
const getState11 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let ressource = yield state11Service.findByZone(critere, code);
        let state11 = {
            type_zone: types_1.MyZone[critere],
            code_zone: code,
            list: ressource,
        };
        res.status(201).json(state11);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getState11 = getState11;
const saveState11 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { year, rubric, functionIncome, fiscIncome, cac, tcd, tci, rrce, pf, tr, appd, ra, trf, ri, fd, reserves, ser, elmt, adlmt, rpaclmt, aic, pic, code_commune, } = req.body;
    try {
        let state11 = new entities_1.State11(year, rubric, functionIncome, fiscIncome, cac, tcd, tci, rrce, pf, tr, appd, ra, trf, ri, fd, reserves, ser, elmt, adlmt, rpaclmt, aic, pic, code_commune);
        let saved = yield state11Service.save(state11);
        res.status(201).json(saved);
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveState11 = saveState11;
const state11 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let list = yield state11Service.findAll();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
    }
});
exports.state11 = state11;
