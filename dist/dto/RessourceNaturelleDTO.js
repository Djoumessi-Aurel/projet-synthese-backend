"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RessourceNaturelleDTO = void 0;
class RessourceNaturelleDTO {
    constructor(res) {
        this.code_commune = res.code_commune;
        this.nom = res.nom;
        this.statut = res.statut;
        this.coordX = res.coordX;
        this.coordY = res.coordY;
        this.coordZ = res.coordZ;
        this.localisationDescriptive = res.localisationDescriptive;
        this.potentiel = res.potentiel;
        this.controle_acces = res.controle_acces;
        this.mode_gestion = res.mode_gestion;
        this.tendance = res.tendance;
        this.probleme_contrainte = res.probleme_contrainte;
        this.action_a_mener = res.action_a_mener;
    }
}
exports.RessourceNaturelleDTO = RessourceNaturelleDTO;
