const messageRepository = require('../repositories/messageRepository');
import { elementaryAddition } from "../types/types";

const problemService = {
    getProblem: (problemData: any) => {
        console.log("Problem data: ", problemData);
        switch (problemData.problemType) {
            case "addition":
                console.log("Generating addition problem");
                return generateAdditionProblem();
            case "multiplication":
                console.log("Generating multiplication problem");
                break;
    }
}
}

function generateAdditionProblem() : elementaryAddition {

    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let retObject : elementaryAddition = {
        value1: num1,
        value2: num2,
        answer: num1 + num2
    }
    return retObject;


}

export default problemService;