"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ressourceFaunique_controller_1 = require("../controllers.entities/ressourceFaunique.controller");
const router = express_1.default.Router();
router.get("/", ressourceFaunique_controller_1.getRessourceFaunique);
router.post("/insert", ressourceFaunique_controller_1.insertRessourceFaunique);
router.delete("/delete/:id", ressourceFaunique_controller_1.deleteRessourceFaunique);
module.exports = router;
exports.default = router;
