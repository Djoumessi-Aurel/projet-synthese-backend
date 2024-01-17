"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const councilpresentation_controller_1 = require("../controllers.entities/councilpresentation.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", councilpresentation_controller_1.getCouncilPresentation);
router.post("/insert", councilpresentation_controller_1.insertCouncilPresentation);
router.delete("/delete/:id", councilpresentation_controller_1.deleteCouncilPresentation);
module.exports = router;
exports.default = router;
