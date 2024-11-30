"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sherry_controller_1 = require("../controllers/sherry.controller");
class SherryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.get('/', sherry_controller_1.miniApp);
    }
}
exports.default = new SherryRoutes().router;
