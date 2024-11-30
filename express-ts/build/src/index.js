"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
class Server {
    constructor(app) {
        this.config(app);
        new index_1.default(app);
    }
    config(app) {
        const corsOptions = {
            origin: '*', // This has to be changed to the domain of the mini app / Sherry's domain
            methods: 'GET'
        };
        app.use((0, cors_1.default)(corsOptions));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
    }
}
exports.default = Server;
