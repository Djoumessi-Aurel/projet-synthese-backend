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
exports.RessourceFaunique = void 0;
const typeorm_1 = require("typeorm");
const SharedProps_1 = require("./SharedProps");
let RessourceFaunique = class RessourceFaunique extends SharedProps_1.Sharedprops {
    constructor(id_type_ressource, code_commune, nom_local, nom_usuel, nom_scientifique) {
        super();
        this.id_type_ressource = id_type_ressource;
        this.code_commune = code_commune;
        this.nom_local = nom_local;
        this.nom_usuel = nom_usuel;
        this.nom_scientifique = nom_scientifique;
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], RessourceFaunique.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RessourceFaunique.prototype, "id_type_ressource", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RessourceFaunique.prototype, "code_commune", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RessourceFaunique.prototype, "nom_local", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RessourceFaunique.prototype, "nom_usuel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RessourceFaunique.prototype, "nom_scientifique", void 0);
RessourceFaunique = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, Number, String, String, String])
], RessourceFaunique);
exports.RessourceFaunique = RessourceFaunique;
