"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemeRessourceNaturelle = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
/** Entité actuellement inutile. Ignorez la juste. */
let ProblemeRessourceNaturelle = class ProblemeRessourceNaturelle extends SharedProps_1.Sharedprops {
    constructor(commune, departement, region, probleme) {
        super();
        this.commune = commune;
        this.departement = departement;
        this.region = region;
        this.probleme = probleme;
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], ProblemeRessourceNaturelle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProblemeRessourceNaturelle.prototype, "commune", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProblemeRessourceNaturelle.prototype, "departement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProblemeRessourceNaturelle.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProblemeRessourceNaturelle.prototype, "probleme", void 0);
ProblemeRessourceNaturelle = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String])
], ProblemeRessourceNaturelle);
exports.ProblemeRessourceNaturelle = ProblemeRessourceNaturelle;
