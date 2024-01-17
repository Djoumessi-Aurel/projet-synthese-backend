"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state13_controller_1 = require("../controllers/state13.controller");
const express_1 = __importDefault(require("express"));
const state13Router = express_1.default.Router();
state13Router.post("/save", state13_controller_1.saveState13);
state13Router.get("/", state13_controller_1.getState13);
state13Router.get("/state13", state13_controller_1.state13);
module.exports = state13Router;
exports.default = state13Router;
