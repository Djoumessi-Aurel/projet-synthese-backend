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
exports.getRegionById = exports.getRegion = void 0;
const Region_1 = require("../entities/Region");
const app_1 = require("../app");
const types_1 = require("../types");
const regionRepo = app_1.AppDataSource.getRepository(Region_1.Region);
const getRegion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let code = -1, critere = undefined;
    if (req.query.code_region) {
        code = parseInt(req.query.code_region.toString());
        critere = types_1.MyZone.Region;
    }
    else if (req.query.code_pays) {
        code = parseInt(req.query.code_pays.toString());
        critere = types_1.MyZone.Pays;
    }
    try {
        if (critere == types_1.MyZone.Region) {
            let region = yield regionRepo.findOne({ where: { code_region: code } });
            res.status(201).json(region);
        }
        else if (critere == types_1.MyZone.Pays) {
            let listeRegion = yield regionRepo.find({ where: { code_pays: code } });
            res.status(201).json(listeRegion);
        }
        else {
            let listeRegion = yield regionRepo.find();
            res.status(201).json(listeRegion);
        }
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getRegion = getRegion;
const getRegionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let region = yield regionRepo.findOne({ where: { id: req.params.id } });
        res.status(201).json(region);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getRegionById = getRegionById;
