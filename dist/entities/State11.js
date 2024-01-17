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
exports.State11 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State11 = class State11 extends SharedProps_1.Sharedprops {
    constructor(year, rubric, functionIncome, fiscIncome, cac, tcd, tci, rrce, pf, tr, appd, ra, trf, ri, fd, ser, elmt, adlmt, rpaclmt, aic, pic, reserves, code_commune) {
        super();
        this.year = year;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State11.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State11.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "rubric", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "functionIncome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "fiscIncome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "cac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "tcd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "tci", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "pedc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "rrce", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "pf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "tr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "appd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "ra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "trf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "ri", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "fd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "reserves", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "ser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "elmt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "adlmt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "rpaclmt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "aic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "pic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State11.prototype, "code_commune", void 0);
State11 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number])
], State11);
exports.State11 = State11;
