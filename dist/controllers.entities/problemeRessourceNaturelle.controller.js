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
exports.deleteProbleme = exports.getProbleme = exports.insertProbleme = void 0;
const ProblemeRessourceNaturelle_service_1 = require("../services/ProblemeRessourceNaturelle.service");
const functions_1 = require("../functions");
const ProblemeRessourceNaturelle_1 = require("../entities/ProblemeRessourceNaturelle");
const types_1 = require("../types");
const problemeService = new ProblemeRessourceNaturelle_service_1.ProblemeRessourceNaturelleService();
const insertProbleme = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { commune, departement, region, probleme } = req.body;
    let erreurs = [];
    if ((0, functions_1.estNullUndefinedOuVide)(commune)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"commune\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(departement)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"departement\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(region)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"region\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(probleme)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"probleme\"");
    }
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs.join("\n") });
        return;
    }
    try {
        let probleme_ = new ProblemeRessourceNaturelle_1.ProblemeRessourceNaturelle(commune, departement, region, probleme);
        probleme_ = yield problemeService.save(probleme_);
        res.status(201).json(probleme_);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertProbleme = insertProbleme;
const getProbleme = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let critere = types_1.MyZone.Pays, nom_zone = "";
    if (req.query.commune) {
        critere = types_1.MyZone.Commune;
        nom_zone = req.query.commune.toString();
    }
    else if (req.query.departement) {
        critere = types_1.MyZone.Departement;
        nom_zone = req.query.departement.toString();
    }
    else if (req.query.region) {
        critere = types_1.MyZone.Region;
        nom_zone = req.query.region.toString();
    }
    try {
        let probleme = yield problemeService.findByZone(critere, nom_zone);
        res.status(201).json(probleme);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getProbleme = getProbleme;
const deleteProbleme = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield problemeService.delete(id);
        res.status(200).json({ message: "ProblemeRessourceNaturelle supprimé avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteProbleme = deleteProbleme;
