"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const vacation_routes_1 = require("./vacation.routes");
const math_routes_1 = require("./math.routes");
router.use('/', vacation_routes_1.vacationRoutes);
router.use('/', math_routes_1.mathRoutes);
//# sourceMappingURL=index.js.map