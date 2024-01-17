"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const state2_controller_1 = require("../controllers/state2.controller");
const state2Router = express_1.default.Router();
state2Router.get("/", state2_controller_1.getState2);
module.exports = state2Router;
exports.default = state2Router;
