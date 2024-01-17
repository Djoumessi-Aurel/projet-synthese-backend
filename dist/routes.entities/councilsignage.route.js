"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const councilsignage_controller_1 = require("../controllers.entities/councilsignage.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", councilsignage_controller_1.getCouncilSignage);
router.post("/insert", councilsignage_controller_1.insertCouncilSignage);
router.delete("/delete/:id", councilsignage_controller_1.deleteCouncilSignage);
module.exports = router;
exports.default = router;
