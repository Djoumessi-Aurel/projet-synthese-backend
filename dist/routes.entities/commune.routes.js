"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commune_controller_1 = require("../controllers.entities/commune.controller");
const CommuneRouter = express_1.default.Router();
CommuneRouter.get("/", commune_controller_1.getCommune);
CommuneRouter.get("/:id", commune_controller_1.getCommuneById);
module.exports = CommuneRouter;
exports.default = CommuneRouter;
