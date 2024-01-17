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
exports.deleteRessourceNaturelle = exports.getRessourceNaturelle = exports.insertRessourceNaturelle = void 0;
const RessourceNaturelle_service_1 = require("../services/RessourceNaturelle.service");
const RessourceNaturelle_1 = require("../entities/RessourceNaturelle");
const functions_1 = require("../functions");
const types_1 = require("../types");
const ressourceService = new RessourceNaturelle_service_1.RessourceNaturelleService();
const insertRessourceNaturelle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { code_commune, nom, statut, coordX, coordY, coordZ, localisationDescriptive, potentiel, controle_acces, mode_gestion, tendance, probleme_contrainte, action_a_mener } = req.body;
    let erreurs = [];
    if (!(0, functions_1.toNombre)(code_commune)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'code_commune'. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(nom)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'nom'");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(statut)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'statut'");
    }
    if (!(0, functions_1.toNombre)(coordX)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'coordX'. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(coordY)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'coordY'. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(coordZ)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'coordZ'. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(localisationDescriptive)) {
        localisationDescriptive = "";
    }
    if ((0, functions_1.estNullUndefinedOuVide)(potentiel)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'potentiel'");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(controle_acces)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'controle_acces'");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(mode_gestion)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'mode_gestion'");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(tendance)) {
        tendance = "";
    }
    if ((0, functions_1.estNullUndefinedOuVide)(probleme_contrainte)) {
        probleme_contrainte = "";
    }
    if ((0, functions_1.estNullUndefinedOuVide)(action_a_mener)) {
        action_a_mener = "";
    }
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs });
        return;
    }
    try {
        let ressourceNaturelle = new RessourceNaturelle_1.RessourceNaturelle(code_commune, nom, statut, coordX, coordY, coordZ, localisationDescriptive, potentiel, controle_acces, mode_gestion, tendance, probleme_contrainte, action_a_mener);
        ressourceNaturelle = yield ressourceService.save(ressourceNaturelle);
        res.status(201).json(ressourceNaturelle);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertRessourceNaturelle = insertRessourceNaturelle;
const getRessourceNaturelle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let ressources = yield ressourceService.findByZone(critere, code);
        res.status(201).json(ressources);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getRessourceNaturelle = getRessourceNaturelle;
const deleteRessourceNaturelle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield ressourceService.delete(id);
        res.status(200).json({ message: "RessourceNaturelle supprimée avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteRessourceNaturelle = deleteRessourceNaturelle;
