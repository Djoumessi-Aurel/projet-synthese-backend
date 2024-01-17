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
exports.saveState8 = exports.getState8 = void 0;
const services_1 = require("../services");
const types_1 = require("../types");
const state8Service = new services_1.State8Service();
const getState8 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let ressource = yield state8Service.findByZone(critere, code);
        let state8 = {
            type_zone: types_1.MyZone[critere],
            code_zone: code,
            list: ressource,
        };
        res.status(201).json(state8);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getState8 = getState8;
const saveState8 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { start, end, name, occupation, council, department, region } = req.body;
    try {
        // let mayor = new State8(name,start,end,occupation,council,department,region)
        // let saved = await state8Service.save(mayor)
        // res.status(200).json(saved)
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveState8 = saveState8;
