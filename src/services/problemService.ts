//const messageRepository = require('../repositories/messageRepository');
import problemModel from '../models/problem';
import s3 from '../config/amazonS3Config';

const problemService = {

    addStaarProblem: async (instruction: string, answer: string, imageFileName : string, imageData: Buffer, standard: string, difficultyLevel: string, staarYear: string, staarQuestionNumber: number) => {
        try {

            const params: AWS.S3.PutObjectRequest = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: imageFileName + '.png', // Specify the filename in the S3 bucket
                Body: imageData, // File data to upload
                ContentType: 'image/png', // adjust content type as per your file type
                ContentDisposition: 'inline' // set to inline
            };
    
            // Upload file to S3 bucket
            const result = await s3.upload(params).promise();
            console.log('File uploaded successfully:', result.Location);
    


            await  problemModel.create({
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
            
            const {imageFileName} = await problemModel.findByIdAndDelete(id);
            console.log('Problem deleted successfully! ID: ' + id);

            const params: AWS.S3.DeleteObjectRequest = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: imageFileName+'.png'
            };

            await s3.deleteObject(params).promise();
            console.log('S3 File named: ' +imageFileName + '.png' +' deleted successfully:');

        } catch (error) {
            console.error('Error deleting problem: ', error);
            throw error;
        }
    }
}

export default problemService;