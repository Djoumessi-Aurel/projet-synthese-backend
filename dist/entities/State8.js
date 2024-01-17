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
exports.State8 = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let State8 = class State8 extends SharedProps_1.Sharedprops {
    constructor(code_commune, localName, commerceName, scientistName, usage) {
        super();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], State8.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], State8.prototype, "code_commune", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State8.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State8.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State8.prototype, "functionIncome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State8.prototype, "InvestIncome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State8.prototype, "functionExpense", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], State8.prototype, "Expense", void 0);
State8 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, String, String, String, String])
], State8);
exports.State8 = State8;
