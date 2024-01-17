"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const departement_controller_1 = require("../controllers.entities/departement.controller");
const DepartementRouter = express_1.default.Router();
DepartementRouter.get("/", departement_controller_1.getDepartement);
DepartementRouter.get("/:id", departement_controller_1.getDepartementById);
module.exports = DepartementRouter;
exports.default = DepartementRouter;
