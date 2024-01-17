"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ressourceNaturelle_controller_1 = require("../controllers.entities/ressourceNaturelle.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", ressourceNaturelle_controller_1.getRessourceNaturelle);
router.post("/insert", ressourceNaturelle_controller_1.insertRessourceNaturelle);
router.delete("/delete/:id", ressourceNaturelle_controller_1.deleteRessourceNaturelle);
module.exports = router;
exports.default = router;
