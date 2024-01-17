"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state12_controller_1 = require("../controllers/state12.controller");
const express_1 = __importDefault(require("express"));
const state12Router = express_1.default.Router();
state12Router.get("/", state12_controller_1.getState12);
module.exports = state12Router;
exports.default = state12Router;
