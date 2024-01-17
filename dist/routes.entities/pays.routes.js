"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pays_controller_1 = require("../controllers.entities/pays.controller");
const PaysRouter = express_1.default.Router();
PaysRouter.get("/", pays_controller_1.getPays);
PaysRouter.get("/:id", pays_controller_1.getPaysById);
module.exports = PaysRouter;
exports.default = PaysRouter;
