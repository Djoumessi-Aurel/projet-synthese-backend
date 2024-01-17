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
exports.deleteCouncilSignage = exports.getCouncilSignage = exports.insertCouncilSignage = void 0;
const CouncilSignage_service_1 = require("../services/CouncilSignage.service");
const functions_1 = require("../functions");
const CouncilSignage_1 = require("../entities/CouncilSignage");
const types_1 = require("../types");
const SignageService = new CouncilSignage_service_1.CouncilSignageService();
const insertCouncilSignage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { code_commune, createDate, surface, population, ethnic, regroupements, nbr_villages, degree, economic_activity, social_infrasture, nbr_femmes_council, nbr_hommes_council, nbr_deces_coucil, nbr_contractuels, nbr_decisionnaires, nbr_temporaires, nbr_fonctionnaires, municipal_heritage, relationship_network, main_strengths, main_weaknesses, opportunities, obstacles } = req.body;
    let erreurs = [];
    if (!(0, functions_1.toNombre)(code_commune)) {
        erreurs.push("Bien vouloir renseigner l'attribut `code_commune`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(population)) {
        erreurs.push("Bien vouloir renseigner l'attribut `population`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(surface)) {
        erreurs.push("Bien vouloir renseigner l'attribut `surface`. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(municipal_heritage)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"municipal_heritage\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(ethnic)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"ethnic\"");
    }
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs.join("\n") });
        return;
    }
    try {
        let Signage_ = new CouncilSignage_1.CouncilSignage(code_commune, createDate, surface, population, ethnic, regroupements, nbr_villages, degree, economic_activity, social_infrasture, nbr_femmes_council, nbr_hommes_council, nbr_deces_coucil, nbr_contractuels, nbr_decisionnaires, nbr_temporaires, nbr_fonctionnaires, municipal_heritage, relationship_network, main_strengths, main_weaknesses, opportunities, obstacles);
        Signage_ = yield SignageService.save(Signage_);
        res.status(201).json(Signage_);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertCouncilSignage = insertCouncilSignage;
const getCouncilSignage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let Signage = yield SignageService.findByZone(critere, code);
        res.status(201).json(Signage);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getCouncilSignage = getCouncilSignage;
const deleteCouncilSignage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield SignageService.delete(id);
        res.status(200).json({ message: "presenetation commune supprimée avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteCouncilSignage = deleteCouncilSignage;
