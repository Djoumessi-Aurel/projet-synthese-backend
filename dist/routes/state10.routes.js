"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state10_controller_1 = require("../controllers/state10.controller");
const express = require("express");
const app = express();
app.post("/save", state10_controller_1.saveState10);
app.get("/state10", state10_controller_1.state10);
app.get("/", state10_controller_1.getState10);
module.exports = app;
