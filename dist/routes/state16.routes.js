"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state16_controller_1 = require("../controllers/state16.controller");
const express_1 = __importDefault(require("express"));
const state16Router = express_1.default.Router();
state16Router.post("/save", state16_controller_1.saveState16);
state16Router.get("/state16", state16_controller_1.state16);
state16Router.get("/", state16_controller_1.getState16);
module.exports = state16Router;
exports.default = state16Router;
