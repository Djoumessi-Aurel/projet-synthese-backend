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
exports.deleteTypeEtat = exports.getTypeEtat = exports.insertTypeEtat = void 0;
const functions_1 = require("../functions");
const TypeEtat_service_1 = require("../services/TypeEtat.service");
const TypeEtat_1 = require("../entities/TypeEtat");
const typeEtatService = new TypeEtat_service_1.TypeEtatService();
const insertTypeEtat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { numero, titre, description } = req.body;
    let erreurs = [];
    if (!(0, functions_1.toNombre)(numero)) {
        erreurs.push("Bien vouloir renseigner l'attribut `numero`. C'est un nombre.");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(titre)) {
        erreurs.push("Bien vouloir renseigner l'attribut `titre`");
    }
    if ((0, functions_1.estNullUndefinedOuVide)(description)) {
        description = "";
    }
    if (erreurs.length != 0) {
        res.status(400).json({ message: "Une erreur est survenue!", details: erreurs });
        return;
    }
    try {
        let typeEtat = new TypeEtat_1.TypeEtat(numero, titre, description);
        typeEtat = yield typeEtatService.save(typeEtat);
        res.status(201).json(typeEtat);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.insertTypeEtat = insertTypeEtat;
const getTypeEtat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let types = yield typeEtatService.findAll();
        res.status(201).json(types);
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.getTypeEtat = getTypeEtat;
const deleteTypeEtat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ message: "Bien vouloir renseigner l'id de l'entité!" });
        return;
    }
    try {
        yield typeEtatService.delete(id);
        res.status(200).json({ message: "TypeEtat supprimée avec succès." });
    }
    catch (error) {
        res.status(400).json({ message: "Une erreur est survenue!", details: error.message });
    }
});
exports.deleteTypeEtat = deleteTypeEtat;
