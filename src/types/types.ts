// a typescript type that holds types of problems such as addition, subtraction, multiplication and division
export type ProblemType = "addition" | "subtraction" | "multiplication" | "division";

export type elementaryAddition = {
    value1: number;
    value2: number;
    answer: number;
}

// a typescript type that holds the preferences for a problem such as type, min, max, whole and float   
export type ProblemAnswerPreferences = {
    type: ProblemType;
    min: number;
    max: number;
    whole: boolean;
    float: boolean;
};
