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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistorique = exports.getHistorique = exports.insertHistorique = void 0;
const functions_1 = require("../functions");
const Historique_1 = require("../entities/Historique");
const HistoriqueService_1 = require("../services/HistoriqueService");
const moment_1 = __importDefault(require("moment"));
const histService = new HistoriqueService_1.HistoriqueService();
const insertHistorique = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { numero_etat, type_zone, code_zone, utilisateur, date } = req.body;
    let erreurs = [];
    if (!(0, functions_1.toNombre)(numero_etat)) {
        erreurs.push("Bien vouloir renseigner l'attribut `numero_etat`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(type_zone)) {
        erreurs.push("Bien vouloir renseigner l'attribut `type_zone`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(code_zone)) {
        erreurs.push("Bien vouloir renseigner l'attribut `code_zone`. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(utilisateur)) {
        erreurs.push("Bien vouloir renseigner l'attribut `utilisateur`");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(date)) {
        date = (0, moment_1.default)().toDate();
    }
    else
        date = (0, moment_1.default)(date).toDate();
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs });
        return;
    }
    try {
        let hist = new Historique_1.Historique(date, utilisateur, numero_etat, type_zone, code_zone);
        hist = yield histService.save(hist);
        res.status(201).json(hist);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertHistorique = insertHistorique;
const getHistorique = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let valeur = -1, critere = undefined;
    if (req.query.code_zone) {
        valeur = parseInt(req.query.code_zone.toString());
        critere = 'code_zone';
    }
    else if (req.query.type_zone) {
        valeur = parseInt(req.query.type_zone.toString());
        critere = 'type_zone';
    }
    else if (req.query.numero_etat) {
        valeur = parseInt(req.query.numero_etat.toString());
        critere = 'numero_etat';
    }
    else if (req.query.utilisateur) {
        valeur = req.query.utilisateur.toString();
        critere = 'utilisateur';
    }
    try {
        let hist = [];
        if (critere == 'code_zone') {
            hist = yield histService.findByCodeZone(Number(valeur));
        }
        else if (critere == 'type_zone') {
            hist = yield histService.findByTypeZone(Number(valeur));
        }
        else if (critere == 'numero_etat') {
            hist = yield histService.findByNumeroEtat(Number(valeur));
        }
        else if (critere == 'utilisateur') {
            hist = yield histService.findByUtilisateur(String(valeur));
        }
        else {
            hist = yield histService.findAll();
        }
        res.status(201).json(hist);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getHistorique = getHistorique;
const deleteHistorique = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield histService.delete(id);
        res.status(200).json({ message: "Element d'historique supprimé avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteHistorique = deleteHistorique;
