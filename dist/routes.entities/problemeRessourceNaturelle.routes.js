"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const problemeRessourceNaturelle_controller_1 = require("../controllers.entities/problemeRessourceNaturelle.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", problemeRessourceNaturelle_controller_1.getProbleme);
router.post("/insert", problemeRessourceNaturelle_controller_1.insertProbleme);
router.delete("/delete/:id", problemeRessourceNaturelle_controller_1.deleteProbleme);
module.exports = router;
exports.default = router;
