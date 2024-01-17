"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouncilPresentationDTO = void 0;
class CouncilPresentationDTO {
    constructor(res) {
        this.code_commune = res.code_commune;
        this.name = res.name;
        this.location = res.location;
        this.limits = res.limits;
        this.createDate = res.createDate;
        this.commissioningDate = res.commissioningDate;
        this.adress = res.adress;
        this.population = res.population;
        this.density = res.density;
        this.surface = res.surface;
        this.ethnic_group = res.ethnic_group;
        this.Number_of_villages = res.Number_of_villages;
    }
}
exports.CouncilPresentationDTO = CouncilPresentationDTO;
