"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNombre = exports.estNullUndefinedOuVide = void 0;
function estNullUndefinedOuVide(valeur) {
    // Vérifier si la valeur est null ou undefined
    if (valeur === null || valeur === undefined) {
        return true;
    }
    // Vérifier si la valeur est une chaîne vide
    if (typeof valeur === 'string' && valeur.trim() === '') {
        return true;
    }
    // Vérifier si la valeur est un tableau vide
    if (Array.isArray(valeur) && valeur.length === 0) {
        return true;
    }
    // Autrement, la valeur n'est ni null, ni undefined, ni vide
    return false;
}
exports.estNullUndefinedOuVide = estNullUndefinedOuVide;
function toNombre(variable) {
    variable = parseInt(variable);
    return typeof variable === 'number' && !isNaN(variable);
}
exports.toNombre = toNombre;
