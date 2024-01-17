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
exports.getPaysById = exports.getPays = void 0;
const Pays_1 = require("../entities/Pays");
const app_1 = require("../app");
const paysRepo = app_1.AppDataSource.getRepository(Pays_1.Pays);
const getPays = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let code_pays = -1;
    if (req.query.code_pays) {
        code_pays = parseInt(req.query.code_pays.toString());
    }
    try {
        if (code_pays == -1) {
            let listePays = yield paysRepo.find();
            res.status(201).json(listePays);
        }
        else {
            let pays = yield paysRepo.findOne({ where: { code_pays } });
            res.status(201).json(pays);
        }
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getPays = getPays;
const getPaysById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pays = yield paysRepo.findOne({ where: { id: req.params.id } });
        res.status(201).json(pays);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getPaysById = getPaysById;
