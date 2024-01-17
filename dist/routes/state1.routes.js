"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const state1_controller_1 = require("../controllers/state1.controller");
const state1Router = express_1.default.Router();
state1Router.get("/", state1_controller_1.getState1);
module.exports = state1Router;
exports.default = state1Router;
