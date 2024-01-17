"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state3_controller_1 = require("../controllers/state3.controller");
const express = require("express");
const app = express();
app.get("/", state3_controller_1.getState3);
app.get("/all", state3_controller_1.getAllState3);
app.post("/save", state3_controller_1.saveState3);
module.exports = app;
