"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RessourceFauniqueDTO = void 0;
class RessourceFauniqueDTO {
    constructor(res) {
        this.code_commune = res.code_commune;
        this.nom_local = res.nom_local;
        this.nom_usuel = res.nom_usuel;
        this.nom_scientifique = res.nom_scientifique;
    }
}
exports.RessourceFauniqueDTO = RessourceFauniqueDTO;
