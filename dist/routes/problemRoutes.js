"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const problemController_1 = __importDefault(require("../controllers/problemController"));
// Initialize multer for file uploads
const upload = (0, multer_1.default)();
router.post('/addProblem', upload.single('file'), problemController_1.default.addStaarProblem);
//router.get('/getProblemTypes', (req,res) => {res.send("Here are the problem types" + "addition")});
router.get('/getStaarProblemsByYear', problemController_1.default.getStaarProblemsByYear);
router.delete('/deleteStaarProblem', problemController_1.default.deleteStaarProblemById);
exports.default = router;
