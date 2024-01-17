"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state14_controller_1 = require("../controllers/state14.controller");
const express_1 = __importDefault(require("express"));
const state14Router = express_1.default.Router();
state14Router.post("/save", state14_controller_1.saveState14);
state14Router.get("/state14", state14_controller_1.state14);
state14Router.get("/", state14_controller_1.getState14);
module.exports = state14Router;
exports.default = state14Router;
