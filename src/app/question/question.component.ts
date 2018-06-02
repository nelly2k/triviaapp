import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { IQuestion } from '../service/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {

  selected: number | undefined;
  @Output() select: EventEmitter<boolean> = new EventEmitter();
  @Input() question: IQuestion;

  onSelect(index) {
    if (this.selected !== undefined) {
      return;
    }

    this.selected = index;
    this.select.emit(index);
  }

  ngOnChanges(changes) {

    this.selected = undefined;

}

  getMyClass(index: number,  prefix: string): string {
    if (this.selected === undefined || this.selected !== index) {
      return `${prefix}-primary`;
    }
    return this.selected === this.question.correct ? `${prefix}-success` : `${prefix}-danger`;
  }

  getQuestionLetter(index: number) {
    switch (index) {
      case 0: return 'A';
      case 1: return 'B';
      case 2: return 'C';
      case 3: return 'D';
    }
  }
}
