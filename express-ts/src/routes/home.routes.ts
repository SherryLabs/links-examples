import { Router } from "express";
import { welcome } from "../controllers/home.controller";

class HomeRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init(): void {
        this.router.get('/', welcome);
    }
}

export default new HomeRoutes().router;