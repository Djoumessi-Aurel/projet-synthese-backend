"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const state6_controller_1 = require("../controllers/state6.controller");
const state6Router = express_1.default.Router();
state6Router.get("/", state6_controller_1.getState6);
module.exports = state6Router;
exports.default = state6Router;
