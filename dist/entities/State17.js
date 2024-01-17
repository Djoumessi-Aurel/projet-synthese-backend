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
exports.State17 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State17 = class State17 extends SharedProps_1.Sharedprops {
    constructor(secteur, vilages, problemes, causes, effets, solutions, code_commune) {
        super();
        this.secteur = secteur;
        this.vilages = vilages;
        this.problemes = problemes;
        this.causes = causes;
        this.effets = effets;
        this.solutions = solutions;
        this.code_commune = code_commune;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State17.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State17.prototype, "secteur", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State17.prototype, "vilages", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State17.prototype, "problemes", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State17.prototype, "causes", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State17.prototype, "effets", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State17.prototype, "solutions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State17.prototype, "code_commune", void 0);
State17 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Array, Array, Array, Array, Array, Number])
], State17);
exports.State17 = State17;
