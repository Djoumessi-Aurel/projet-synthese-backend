"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const region_controller_1 = require("../controllers.entities/region.controller");
const RegionRouter = express_1.default.Router();
RegionRouter.get("/", region_controller_1.getRegion);
RegionRouter.get("/:id", region_controller_1.getRegionById);
module.exports = RegionRouter;
exports.default = RegionRouter;
