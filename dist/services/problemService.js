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
//const messageRepository = require('../repositories/messageRepository');
const problem_1 = __importDefault(require("../models/problem"));
const amazonS3Config_1 = __importDefault(require("../config/amazonS3Config"));
const problemService = {
    addStaarProblem: (instruction, answer, imageFileName, imageData, standard, difficultyLevel, staarYear, staarQuestionNumber) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const params = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: imageFileName + '.png', // Specify the filename in the S3 bucket
                Body: imageData, // File data to upload
                ContentType: 'image/png', // adjust content type as per your file type
                ContentDisposition: 'inline' // set to inline
            };
            // Upload file to S3 bucket
            const result = yield amazonS3Config_1.default.upload(params).promise();
            console.log('File uploaded successfully:', result.Location);
            yield problem_1.default.create({
                instruction: instruction,
                answer: answer,
                imageUrl: result.Location,
                imageFileName: imageFileName,
                standard: standard,
                difficultyLevel: difficultyLevel,
                staarInfo: {
                    year: staarYear,
                    questionNumber: staarQuestionNumber
                },
                createdAt: new Date()
            });
            console.log('Problem saved in database successfully');
        }
        catch (error) {
            console.error('Error creating problem: ', error);
            throw error;
        }
    }),
    getStaarProblemsByYear: (staarYear) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const problems = yield problem_1.default.find({ 'staarInfo.year': staarYear });
            return problems;
        }
        catch (error) {
            console.error('Error getting problems: ', error);
            throw error;
        }
    }),
    deleteStaarProblemById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { imageFileName } = yield problem_1.default.findByIdAndDelete(id);
            console.log('Problem deleted successfully! ID: ' + id);
            const params = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: imageFileName + '.png'
            };
            yield amazonS3Config_1.default.deleteObject(params).promise();
            console.log('S3 File named: ' + imageFileName + '.png' + ' deleted successfully:');
        }
        catch (error) {
            console.error('Error deleting problem: ', error);
            throw error;
        }
    })
};
exports.default = problemService;
