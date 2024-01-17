"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state8_controller_1 = require("../controllers/state8.controller");
const express_1 = __importDefault(require("express"));
const state8Router = express_1.default.Router();
state8Router.post("/save", state8_controller_1.saveState8);
state8Router.get("/", state8_controller_1.getState8);
module.exports = state8Router;
exports.default = state8Router;
