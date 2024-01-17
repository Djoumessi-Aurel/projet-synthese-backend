"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const localite_controller_1 = require("../controllers.entities/localite.controller");
const LocaliteRouter = express_1.default.Router();
LocaliteRouter.get("/", localite_controller_1.getLocalite);
LocaliteRouter.get("/:id", localite_controller_1.getLocaliteById);
module.exports = LocaliteRouter;
exports.default = LocaliteRouter;
