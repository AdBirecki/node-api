"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vacationRoutes = void 0;
const express = __importStar(require("express"));
const services_1 = require("../services");
const router = express.Router();
router.get('/vacations', (req, res) => {
    services_1.vacationService.getVacations(req, res);
});
router.post('/vacations', (req, res) => {
    services_1.vacationService.postVacation(req, res);
});
router.put('/vacations/:id', (req, res) => {
    services_1.vacationService.putVacation(req, res);
});
router.delete('/vacations/:id', (req, res) => {
    services_1.vacationService.deleteVacation(req, res);
});
exports.vacationRoutes = router;
//# sourceMappingURL=vacation.routes.js.map