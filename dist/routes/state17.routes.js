"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state17_controller_1 = require("../controllers/state17.controller");
const express_1 = __importDefault(require("express"));
const state17Router = express_1.default.Router();
state17Router.post("/save", state17_controller_1.saveState17);
state17Router.get("/state17", state17_controller_1.state17);
state17Router.get("/", state17_controller_1.getState17);
module.exports = state17Router;
exports.default = state17Router;
