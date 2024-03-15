"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageRepository = require('../repositories/messageRepository');
const problemService = {
    getProblem: (problemData) => {
        console.log("Problem data: ", problemData);
        switch (problemData.problemType) {
            case "addition":
                console.log("Generating addition problem");
                let problem = generateAdditionProblem();
                console.log("Generated problem: ", problem);
                return problem;
        }
    }
};
function generateAdditionProblem() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let retObject = {
        value1: num1,
        value2: num2,
        answer: num1 + num2
    };
    return retObject;
}
exports.default = problemService;
