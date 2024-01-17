"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const communecode_controller_1 = require("../controllers.entities/communecode.controller");
const CommuneCodeRouter = express_1.default.Router();
CommuneCodeRouter.get("/", communecode_controller_1.getCommuneCode);
module.exports = CommuneCodeRouter;
exports.default = CommuneCodeRouter;
