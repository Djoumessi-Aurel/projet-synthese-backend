"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state11_controller_1 = require("../controllers/state11.controller");
const express_1 = __importDefault(require("express"));
const state11Router = express_1.default.Router();
state11Router.post("/save", state11_controller_1.saveState11);
state11Router.get("/state11", state11_controller_1.state11);
state11Router.get("/", state11_controller_1.getState11);
module.exports = state11Router;
exports.default = state11Router;
