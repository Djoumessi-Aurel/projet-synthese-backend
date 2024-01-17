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
exports.CouncilPresentation = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let CouncilPresentation = class CouncilPresentation extends SharedProps_1.Sharedprops {
    constructor(code_commune, name, location, limits, createDate, commissioningDate, adress, population, density, surface, ethnic_group, Number_of_villages) {
        super();
        this.code_commune = code_commune;
        this.name = name;
        this.location = location;
        this.limits = limits;
        this.createDate = createDate;
        this.commissioningDate = commissioningDate;
        this.adress = adress;
        this.population = population;
        this.density = density;
        this.surface = surface;
        this.ethnic_group = ethnic_group;
        this.Number_of_villages = Number_of_villages;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], CouncilPresentation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouncilPresentation.prototype, "code_commune", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouncilPresentation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouncilPresentation.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouncilPresentation.prototype, "limits", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], CouncilPresentation.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], CouncilPresentation.prototype, "commissioningDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouncilPresentation.prototype, "adress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilPresentation.prototype, "population", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilPresentation.prototype, "density", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilPresentation.prototype, "surface", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouncilPresentation.prototype, "ethnic_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CouncilPresentation.prototype, "Number_of_villages", void 0);
CouncilPresentation = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, String, String, String, Date, Date, String, Number, Number, Number, String, Number])
], CouncilPresentation);
exports.CouncilPresentation = CouncilPresentation;
// @Column()
// actvities : string
// @Column()
// problems : string
// @Column()
// potentialities: string
// @Column()
// resources: string
