"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouncilSignageDTO = void 0;
class CouncilSignageDTO {
    constructor(res) {
        this.code_commune = res.code_commune;
        this.createDate = res.createDate;
        this.surface = res.surface;
        this.population = res.population;
        this.ethnic = res.ethnic;
        this.regroupements = res.regroupements;
        this.nbr_villages = res.nbr_villages;
        this.degree = res.degree;
        this.economic_activity = res.economic_activity;
        this.economic_activity = res.economic_activity;
        this.social_infrasture = res.social_infrasture;
        this.nbr_femmes_council = res.nbr_femmes_council;
        this.nbr_hommes_council = res.nbr_hommes_council;
        this.nbr_deces_coucil = res.nbr_deces_coucil;
        this.nbr_contractuels = res.nbr_contractuels;
        this.nbr_decisionnaires = res.nbr_decisionnaires;
        this.nbr_temporaires = res.nbr_temporaires;
        this.nbr_fonctionnaires = res.nbr_fonctionnaires;
        this.municipal_heritage = res.municipal_heritage;
        this.relationship_network = res.relationship_network;
        this.main_strengths = res.main_strengths;
        this.main_weaknesses = res.main_weaknesses;
        this.opportunities = res.opportunities;
        this.obstacles = res.obstacles;
    }
}
exports.CouncilSignageDTO = CouncilSignageDTO;
