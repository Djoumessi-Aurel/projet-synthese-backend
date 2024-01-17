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
exports.State15 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State15 = class State15 extends SharedProps_1.Sharedprops {
    constructor(aspectAnalyse, contraintes, axeRenforcement, dateLimite, besoinAppui, code_commune) {
        super();
        this.aspectAnalyse = aspectAnalyse;
        this.contraintes = contraintes;
        this.axeRenforcement = axeRenforcement;
        this.dateLimite = dateLimite;
        this.besoinAppui = besoinAppui;
        this.code_commune = code_commune;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State15.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State15.prototype, "aspectAnalyse", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State15.prototype, "contraintes", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State15.prototype, "axeRenforcement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State15.prototype, "dateLimite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], State15.prototype, "besoinAppui", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State15.prototype, "code_commune", void 0);
State15 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Array, Array, String, Boolean, Number])
], State15);
exports.State15 = State15;
