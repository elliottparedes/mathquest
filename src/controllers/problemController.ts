import problemService from '../services/problemService';

const problemController = {
    getProblem :  ( req, res) => {
        try {
        const problemData = req.query;
        const returnedProblem = problemService.getProblem(problemData);

        res.status(200).json({returnedProblem});

        } catch ( error){
            console.error('Error fetching problem: ', error);
            res.status(500).json({error:'Internal Server Error'});
        }
      
    },
};

export default problemController;