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
exports.deleteCouncilPresentation = exports.getCouncilPresentation = exports.insertCouncilPresentation = void 0;
const CouncilPresentation_service_1 = require("../services/CouncilPresentation.service");
const functions_1 = require("../functions");
const CouncilPresentation_1 = require("../entities/CouncilPresentation");
const types_1 = require("../types");
const presentationService = new CouncilPresentation_service_1.CouncilPresentationService();
const insertCouncilPresentation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { code_commune, name, location, limits, createDate, commissioningDate, adress, population, density, surface, ethnic_group, Number_of_villages } = req.body;
    let erreurs = [];
    if (!(0, functions_1.toNombre)(code_commune)) {
        erreurs.push("Bien vouloir renseigner l'attribut `code_commune`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(population)) {
        erreurs.push("Bien vouloir renseigner l'attribut `population`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(density)) {
        erreurs.push("Bien vouloir renseigner l'attribut `density`. C'est un nombre.");
    }
    if (!(0, functions_1.toNombre)(surface)) {
        erreurs.push("Bien vouloir renseigner l'attribut `surface`. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(name)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"name\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(location)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"location\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(limits)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"limits\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(location)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"location\"");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(limits)) {
        erreurs.push("Bien vouloir renseigner l'attribut \"limits\"");
    }
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs.join("\n") });
        return;
    }
    try {
        let presentation_ = new CouncilPresentation_1.CouncilPresentation(code_commune, name, location, limits, createDate, commissioningDate, adress, population, density, surface, ethnic_group, Number_of_villages);
        presentation_ = yield presentationService.save(presentation_);
        res.status(201).json(presentation_);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertCouncilPresentation = insertCouncilPresentation;
const getCouncilPresentation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let presentation = yield presentationService.findByZone(critere, code);
        res.status(201).json(presentation);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getCouncilPresentation = getCouncilPresentation;
const deleteCouncilPresentation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield presentationService.delete(id);
        res.status(200).json({ message: "presenetation commune supprimée avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteCouncilPresentation = deleteCouncilPresentation;
