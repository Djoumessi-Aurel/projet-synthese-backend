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
exports.CouncilSignage = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let CouncilSignage = class CouncilSignage extends SharedProps_1.Sharedprops {
    constructor(code_commune, createDate, surface, population, ethnic, regroupements, nbr_villages, degree, economic_activity, social_infrasture, nbr_femmes_council, nbr_hommes_council, nbr_deces_coucil, nbr_contractuels, nbr_decisionnaires, nbr_temporaires, nbr_fonctionnaires, municipal_heritage, relationship_network, main_strengths, main_weaknesses, opportunities, obstacles) {
        super();
        this.code_commune = code_commune;
        this.createDate = createDate;
        this.surface = surface;
        this.population = population;
        this.ethnic = ethnic;
        this.regroupements = regroupements;
        this.nbr_villages = nbr_villages;
        this.degree = degree;
        this.economic_activity = economic_activity;
        this.economic_activity = economic_activity;
        this.social_infrasture = social_infrasture;
        this.nbr_femmes_council = nbr_femmes_council;
        this.nbr_hommes_council = nbr_hommes_council;
        this.nbr_deces_coucil = nbr_deces_coucil;
        this.nbr_contractuels = nbr_contractuels;
        this.nbr_decisionnaires = nbr_decisionnaires;
        this.nbr_temporaires = nbr_temporaires;
        this.nbr_fonctionnaires = nbr_fonctionnaires;
        this.municipal_heritage = municipal_heritage;
        this.relationship_network = relationship_network;
        this.main_strengths = main_strengths;
        this.main_weaknesses = main_weaknesses;
        this.opportunities = opportunities;
        this.obstacles = obstacles;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], CouncilSignage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "code_commune", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], CouncilSignage.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "surface", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "population", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_femmes_council", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_hommes_council", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_deces_coucil", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_contractuels", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_decisionnaires", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_temporaires", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_fonctionnaires", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouncilSignage.prototype, "ethnic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilSignage.prototype, "nbr_villages", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "economic_activity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "social_infrasture", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "municipal_heritage", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "regroupements", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "relationship_network", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "main_strengths", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "main_weaknesses", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "opportunities", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], CouncilSignage.prototype, "obstacles", void 0);
CouncilSignage = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, Date, Number, Number, String, Array, Number, Array, Array, Array, Number, Number, Number, Number, Number, Number, Number, Array, Array, Array, Array, Array, Array])
], CouncilSignage);
exports.CouncilSignage = CouncilSignage;
// @Column()
// actvities : string
// @Column()
// problems : string
// @Column()
// potentialities: string
// @Column()
// resources: string
