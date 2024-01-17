"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const historique_controller_1 = require("../controllers.entities/historique.controller");
const HistRouter = express_1.default.Router();
HistRouter.get("/", historique_controller_1.getHistorique);
HistRouter.post("/insert", historique_controller_1.insertHistorique);
HistRouter.delete("/delete/:id", historique_controller_1.deleteHistorique);
module.exports = HistRouter;
exports.default = HistRouter;
