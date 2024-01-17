"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeEtat_controller_1 = require("../controllers.entities/typeEtat.controller");
const router = express_1.default.Router();
router.get("/", typeEtat_controller_1.getTypeEtat);
router.post("/insert", typeEtat_controller_1.insertTypeEtat);
router.delete("/delete/:id", typeEtat_controller_1.deleteTypeEtat);
module.exports = router;
exports.default = router;
