"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state7_controller_1 = require("../controllers/state7.controller");
const express = require("express");
const app = express();
app.post("/save", state7_controller_1.saveState7);
app.get("/all", state7_controller_1.state7);
app.get("/", state7_controller_1.getState7);
module.exports = app;
