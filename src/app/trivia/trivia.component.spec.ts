import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TriviaComponent} from './trivia.component';
import {QuestionComponent} from '../question/question.component';
import {GameResultComponent} from '../game-result/game-result.component';
import {IAnsweredQuestion, IQuestion} from '../service/question';
import {QuestionProviderService} from '../service/question-provider.service';
import {DebugElement} from '@angular/core';

describe('TriviaComponent', () => {
  let component: TriviaComponent;
  let fixture: ComponentFixture < TriviaComponent >;
  let debugElement: DebugElement;
  let questionProviderService: QuestionProviderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [QuestionProviderService],
      declarations: [TriviaComponent, QuestionComponent, GameResultComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TriviaComponent);

    debugElement = fixture.debugElement;

    questionProviderService = debugElement
      .injector
      .get(QuestionProviderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets answers to empty on start', () => {
    component.answers = [{} as IAnsweredQuestion];
    component.start();
    expect(component.answers.length).toBe(0);
  });

  it('initiates question provider on start', () => {
    spyOn(questionProviderService, 'start');
    component.start();
    expect(questionProviderService.start).toHaveBeenCalled();
  });

  it('gets question on start', () => {
    component.start();
    expect(component.question).toBeDefined();
  });

  it('sets isOn on start', () => {
    component.start();
    expect(component.isOn).toBe(true);
  });

  it('changes question on next', ()=>{
    component.start();
    const question1 = component.question.description;

    component.next();
    expect(component.question.description).not.toBe(question1);
  });

  it('sets isanswered to false on next', () => {
    component.isAnswered = true;
    component.next();
    expect(component.isAnswered).toBe(false);
  });

  it('ends game when rich max size', () => {
    component.size = 1;
    component.answers = [{}as IAnsweredQuestion];
    component.next();
    expect(component.isOn).toBe(false);
  });

  it('sets isAnsewered to true on answered',() => {
    component.question = {description:'test'}as IQuestion;
    component.answer(0);
    expect(component.isAnswered).toBe(true);
  });

  it('added answer to queue when answered',() =>{
    component.question = {description:'test'}as IQuestion;
    component.answer(1);
    expect(component.answers[0].answer).toBe(1);
    expect(component.answers[0].description).toBe('test');
  });
});
