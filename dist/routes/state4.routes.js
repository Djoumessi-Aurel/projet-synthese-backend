"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state4_controller_1 = require("../controllers/state4.controller");
const express = require("express");
const app = express();
app.get("/", state4_controller_1.getState4);
app.get("/all", state4_controller_1.state4);
app.post("/save", state4_controller_1.saveState4);
module.exports = app;
