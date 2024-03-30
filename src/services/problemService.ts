//const messageRepository = require('../repositories/messageRepository');
import problemModel from '../models/problem';

const problemService = {

    addStaarProblem: async (instruction: string, answer: string, imageUrl: string, standard: string, difficultyLevel: string, staarYear: string, staarQuestionNumber: number) => {
        try {

            await  problemModel.create({
            instruction: instruction,
            answer: answer,
            imageUrl: imageUrl,
            standard: standard,
            difficultyLevel: difficultyLevel,
            staarInfo: {
                year: staarYear,
                questionNumber: staarQuestionNumber
            },
            createdAt: new Date()
        });

        console.log('Problem saved in database successfully');

        } catch (error) {
            console.error('Error creating problem: ', error);
            throw error;
        }
       
    },
    getStaarProblemsByYear: async (staarYear: string) => {
        try {
            const problems = await problemModel.find({'staarInfo.year': staarYear});
            return problems;
        } catch (error) {
            console.error('Error getting problems: ', error);
            throw error;
        }
    },
    deleteStaarProblemById: async (id: string) => {
        try {
            await problemModel.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error deleting problem: ', error);
            throw error;
        }
    }
}

export default problemService;