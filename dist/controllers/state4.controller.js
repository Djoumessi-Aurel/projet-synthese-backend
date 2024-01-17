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
exports.saveState4 = exports.state4 = exports.getState4 = void 0;
const state4_service_1 = require("../services/state4.service");
const State4_1 = require("../entities/State4");
const types_1 = require("../types");
const state4Service = new state4_service_1.State4Service();
let list;
const getState4 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        list = yield state4Service.findByZone(critere, code);
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
exports.getState4 = getState4;
const state4 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        list = yield state4Service.findAll();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
    }
});
exports.state4 = state4;
const saveState4 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("enter");
    const { code_commune, sector, activities, problems, potentialities, resources } = req.body;
    try {
        let councilResource = new State4_1.State4(code_commune, activities, problems, potentialities, resources, sector);
        let saved = yield state4Service.save(councilResource);
        res.status(200).json(saved);
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveState4 = saveState4;
