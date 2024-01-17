"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state15_controller_1 = require("../controllers/state15.controller");
const express_1 = __importDefault(require("express"));
const state15Router = express_1.default.Router();
state15Router.post("/save", state15_controller_1.saveState15);
state15Router.get("/state15", state15_controller_1.state15);
state15Router.get("/", state15_controller_1.getState15);
module.exports = state15Router;
exports.default = state15Router;
