"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const problemService_1 = __importDefault(require("../services/problemService"));
const problemController = {
    addStaarProblem: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { fileName, instruction, answer, standard, difficultyLevel, staarYear, staarQuestionNumber } = req.body;
            const imageData = req.file.buffer;
            if (!instruction || !answer || !standard || !difficultyLevel || !staarYear || !staarQuestionNumber || !imageData) {
                return res.status(400).json({ error: 'Missing required field(s)' });
            }
            // const params: AWS.S3.PutObjectRequest = {
            //     Bucket: process.env.AWS_S3_BUCKET_NAME,
            //     Key: fileName + '.png', // Specify the filename in the S3 bucket
            //     Body: imageData, // File data to upload
            //     ContentType: 'image/png', // adjust content type as per your file type
            //     ContentDisposition: 'inline' // set to inline
            // };
            // // Upload file to S3 bucket
            // const result = await s3.upload(params).promise();
            // console.log('File uploaded successfully:', result.Location);
            yield problemService_1.default.addStaarProblem(instruction, answer, fileName, imageData, standard, difficultyLevel, staarYear, staarQuestionNumber);
            res.status(200).json({ message: 'Problem created successfully' });
        }
        catch (error) {
            console.error('Error creating problem: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getStaarProblemsByYear: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { staarYear } = req.query;
            if (!staarYear) {
                return res.status(400).json({ error: 'Missing required field(s)' });
            }
            const problems = yield problemService_1.default.getStaarProblemsByYear(staarYear);
            res.status(200).json(problems);
        }
        catch (error) {
            console.error('Error getting problems: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteStaarProblemById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({ error: 'Missing required field(s)' });
            }
            yield problemService_1.default.deleteStaarProblemById(id);
            res.status(200).json({ message: 'Problem deleted successfully' });
        }
        catch (error) {
            console.error('Error deleting problem: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    })
};
exports.default = problemController;
