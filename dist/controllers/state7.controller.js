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
exports.state7 = exports.saveState7 = exports.getState7 = void 0;
const state7_service_1 = require("../services/state7.service");
const entities_1 = require("../entities");
const types_1 = require("../types");
let list;
const state7Service = new state7_service_1.State7Service();
const getState7 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        list = yield state7Service.findByZone(critere, code);
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
exports.getState7 = getState7;
const saveState7 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code_commune, localName, commerceName, scientistName, usage } = req.body;
    try {
        let state7 = new entities_1.State7(localName, commerceName, scientistName, usage, code_commune);
        let saved = yield state7Service.save(state7);
        res.status(200).json(saved);
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveState7 = saveState7;
const state7 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        list = yield state7Service.findAll();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
    }
});
exports.state7 = state7;
