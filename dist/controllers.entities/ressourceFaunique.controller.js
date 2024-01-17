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
exports.deleteRessourceFaunique = exports.getRessourceFaunique = exports.insertRessourceFaunique = void 0;
const functions_1 = require("../functions");
const types_1 = require("../types");
const RessourceFaunique_service_1 = require("../services/RessourceFaunique.service");
const RessourceFaunique_1 = require("../entities/RessourceFaunique");
const ressourceService = new RessourceFaunique_service_1.RessourceFauniqueService();
const insertRessourceFaunique = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { code_commune, id_type_ressource, nom_local, nom_usuel, nom_scientifique } = req.body;
    let erreurs = [];
    if (!(0, functions_1.toNombre)(code_commune)) {
        erreurs.push("Bien vouloir renseigner l'attribut `code_commune`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(id_type_ressource)) {
        erreurs.push("Bien vouloir renseigner l'attribut `id_type_ressource`. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(nom_local)) {
        erreurs.push("Bien vouloir renseigner l'attribut `nom_local`");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(nom_usuel)) {
        erreurs.push("Bien vouloir renseigner l'attribut `nom_usuel`");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(nom_scientifique)) {
        nom_scientifique = "";
    }
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs });
        return;
    }
    try {
        let ressourceFaunique = new RessourceFaunique_1.RessourceFaunique(id_type_ressource, code_commune, nom_local, nom_usuel, nom_scientifique);
        ressourceFaunique = yield ressourceService.save(ressourceFaunique);
        res.status(201).json(ressourceFaunique);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertRessourceFaunique = insertRessourceFaunique;
const getRessourceFaunique = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.getRessourceFaunique = getRessourceFaunique;
const deleteRessourceFaunique = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield ressourceService.delete(id);
        res.status(200).json({ message: "RessourceFaunique supprimée avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteRessourceFaunique = deleteRessourceFaunique;
