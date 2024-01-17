"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state9_controller_1 = require("../controllers/state9.controller");
const express = require("express");
const app = express();
app.post("/save", state9_controller_1.saveState9);
app.get("/state9", state9_controller_1.state9);
app.get("/", state9_controller_1.getState9);
module.exports = app;
