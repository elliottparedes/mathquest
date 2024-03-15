"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const problemController_1 = __importDefault(require("../controllers/problemController"));
router.get('/getProblem', problemController_1.default.getProblem);
router.get('/getProblemTypes', (req, res) => { res.send("Here are the problem types" + "addition"); });
exports.default = router;
