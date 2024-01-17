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
exports.Historique = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let Historique = class Historique extends SharedProps_1.Sharedprops {
    constructor(date_creation, utilisateur, numero_etat, type_zone, code_zone) {
        super();
        this.date_creation = date_creation;
        this.utilisateur = utilisateur;
        this.numero_etat = numero_etat;
        this.type_zone = type_zone;
        this.code_zone = code_zone;
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Historique.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Historique.prototype, "date_creation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Historique.prototype, "utilisateur", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Historique.prototype, "numero_etat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Historique.prototype, "type_zone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Historique.prototype, "code_zone", void 0);
Historique = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Date, String, Number, Number, Number])
], Historique);
exports.Historique = Historique;
