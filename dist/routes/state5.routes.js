"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state5_controller_1 = require("../controllers/state5.controller");
const express_1 = __importDefault(require("express"));
const state5Router = express_1.default.Router();
state5Router.get("/", state5_controller_1.getState5);
module.exports = state5Router;
exports.default = state5Router;
