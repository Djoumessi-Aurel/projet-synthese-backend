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
exports.State9 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State9 = class State9 extends SharedProps_1.Sharedprops {
    constructor(libelle, functionExpense, personExpense, investmentExpense, code_commune) {
        super();
        this.libelle = libelle;
        this.functionExpense = functionExpense;
        this.investmentExpense = investmentExpense;
        this.personExpense = personExpense;
        this.code_commune = code_commune;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State9.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State9.prototype, "libelle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State9.prototype, "functionExpense", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State9.prototype, "personExpense", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State9.prototype, "investmentExpense", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], State9.prototype, "code_commune", void 0);
State9 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String, Number])
], State9);
exports.State9 = State9;
