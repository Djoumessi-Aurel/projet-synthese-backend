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
exports.RessourceNaturelle = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let RessourceNaturelle = class RessourceNaturelle extends SharedProps_1.Sharedprops {
    constructor(code_commune, nom, statut, coordX, coordY, coordZ, localisationDescriptive, potentiel, controle_acces, mode_gestion, tendance, probleme_contrainte, action_a_mener) {
        super();
        this.code_commune = code_commune;
        this.nom = nom;
        this.statut = statut;
        this.coordX = coordX;
        this.coordY = coordY;
        this.coordZ = coordZ;
        this.localisationDescriptive = localisationDescriptive;
        this.potentiel = potentiel;
        this.controle_acces = controle_acces;
        this.mode_gestion = mode_gestion;
        this.tendance = tendance;
        this.probleme_contrainte = probleme_contrainte;
        this.action_a_mener = action_a_mener;
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], RessourceNaturelle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RessourceNaturelle.prototype, "code_commune", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "statut", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "caracteristique", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "utilisation_actuelle", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "potentiel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "probleme_contrainte", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "action_a_mener", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "controle_acces", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "archive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RessourceNaturelle.prototype, "id_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "mise_a_jour", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "localisationDescriptive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], RessourceNaturelle.prototype, "coordX", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], RessourceNaturelle.prototype, "coordY", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], RessourceNaturelle.prototype, "coordZ", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "mode_gestion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RessourceNaturelle.prototype, "tendance", void 0);
RessourceNaturelle = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, String, String, Number, Number, Number, String, String, String, String, String, String, String])
], RessourceNaturelle);
exports.RessourceNaturelle = RessourceNaturelle;
