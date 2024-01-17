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
exports.State14 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State14 = class State14 extends SharedProps_1.Sharedprops {
    constructor(aspectAnalyse, contraintes, opportunites, faiblesses, forces, solutions, code_commune) {
        super();
        this.aspectAnalyse = aspectAnalyse;
        this.contraintes = contraintes;
        this.opportunites = opportunites;
        this.faiblesses = faiblesses;
        this.forces = forces;
        this.solutions = solutions;
        this.code_commune = code_commune;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State14.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State14.prototype, "aspectAnalyse", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State14.prototype, "contraintes", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State14.prototype, "opportunites", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State14.prototype, "faiblesses", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State14.prototype, "forces", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, nullable: true }),
    __metadata("design:type", Array)
], State14.prototype, "solutions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State14.prototype, "code_commune", void 0);
State14 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Array, Array, Array, Array, Array, Number])
], State14);
exports.State14 = State14;
