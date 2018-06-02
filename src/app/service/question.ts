export interface IQuestion {
    description: string;
    options: string[];
    correct: number;
}

export interface IAnsweredQuestion extends IQuestion {
    answer: number;
}
