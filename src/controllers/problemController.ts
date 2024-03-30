import problemService from '../services/problemService';
import { Request, Response } from 'express';
import s3 from '../config/amazonS3Config';

const problemController = {
    addStaarProblem :  async ( req : Request, res: Response) => {
        try {

        const { fileName, instruction, answer, standard, difficultyLevel, staarYear, staarQuestionNumber} = req.body;
        const imageData = req.file.buffer;

        if (!instruction || !answer || !standard || !difficultyLevel || !staarYear || !staarQuestionNumber|| !imageData) {
            return res.status(400).json({error: 'Missing required field(s)'});
        }

        const params: AWS.S3.PutObjectRequest = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileName, // Specify the filename in the S3 bucket
            Body: imageData // File data to upload
        };

        // Upload file to S3 bucket
        const result = await s3.upload(params).promise();
        console.log('File uploaded successfully:', result.Location);

        await problemService.addStaarProblem(instruction, answer, result.Location, standard, difficultyLevel, staarYear, staarQuestionNumber);

       res.status(200).json({message: 'Problem created successfully'});

        } catch ( error){
            console.error('Error creating problem: ', error);
            res.status(500).json({error:'Internal Server Error'});
        }
      
    },
    getStaarProblemsByYear: async (req: Request, res: Response) => {
        try {

            const {staarYear} = req.query as {staarYear: string};
            if (!staarYear) {
                return res.status(400).json({error: 'Missing required field(s)'});
            }



            const problems = await problemService.getStaarProblemsByYear(staarYear);
            res.status(200).json(problems);
        } catch (error) {
            console.error('Error getting problems: ', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },
    deleteStaarProblemById: async (req: Request, res: Response) => {
        try {
            const {id} = req.query as {id: string};
            if (!id) {
                return res.status(400).json({error: 'Missing required field(s)'});
            }

            await problemService.deleteStaarProblemById(id);
            res.status(200).json({message: 'Problem deleted successfully'});
        } catch (error) {
            console.error('Error deleting problem: ', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
};

export default problemController;