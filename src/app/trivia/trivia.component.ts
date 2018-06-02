import { Component, OnInit } from '@angular/core';
import { QuestionProviderService } from '../service/question-provider.service';
import { IQuestion, IAnsweredQuestion } from '../service/question';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {
  size = 10;
  question: IQuestion;
  answers: IAnsweredQuestion[];
  isAnswered = false;
  isOn = false;

  constructor(private questionProvider: QuestionProviderService) {
    this.answers = [];
  }

  start() {
    this.answers = [];
    this.questionProvider.start();
    this.question = this.questionProvider.getNextQuestion();
    this.isOn = true;
  }

  next() {
    this.question = this.questionProvider.getNextQuestion();
    this.isAnswered = false;
    if (this.answers.length >= this.size) {
      this.isOn = false;
    }
  }

  answer(result: number) {
    this.isAnswered = true;
    const answer = this.question;
    (answer as IAnsweredQuestion).answer = result;
    this.answers.push(answer as IAnsweredQuestion);
  }

}
