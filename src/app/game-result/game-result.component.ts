import { Component, OnInit, Input } from '@angular/core';
import { IAnsweredQuestion } from '../service/question';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {
  @Input() answers: IAnsweredQuestion[];
  constructor() { }

  ngOnInit() {
  }
  getCorrect(): number {
    return this.answers.filter(x => x.answer === x.correct).length;
  }

  getMyClass(answer: IAnsweredQuestion,  prefix: string): string {
    return answer.correct === answer.answer ? `${prefix}-success` : `${prefix}-danger`;
  }
}
