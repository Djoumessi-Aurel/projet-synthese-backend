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
exports.State16 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State16 = class State16 extends SharedProps_1.Sharedprops {
    constructor(besoin, populationTotale, populationCouverte, ecarts, justificationEcart, objectifGeneraux, principalesActivites, responsablePartenaire, code_commune) {
        super();
        this.besoin = besoin;
        this.populationCouverte = populationCouverte;
        this.populationTotale = populationTotale;
        this.ecarts = ecarts;
        this.justificationEcart = justificationEcart;
        this.objectifGeneraux = objectifGeneraux;
        this.principalesActivites = principalesActivites;
        this.responsablePartenaire = responsablePartenaire;
        this.code_commune = code_commune;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State16.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State16.prototype, "besoin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State16.prototype, "populationTotale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State16.prototype, "populationCouverte", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State16.prototype, "ecarts", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State16.prototype, "justificationEcart", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State16.prototype, "objectifGeneraux", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State16.prototype, "principalesActivites", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State16.prototype, "responsablePartenaire", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State16.prototype, "code_commune", void 0);
State16 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, Number, Number, Array, Array, Array, Array, Number])
], State16);
exports.State16 = State16;
