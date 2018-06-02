import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { IQuestion } from '../service/question';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = {description: 'test question', options: []} as IQuestion;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets primary class if not selected', () => {
    component.question = {correct: 1} as IQuestion;
    expect(component.getMyClass(0, '')).toBe('-primary');
  });

  it('sets primary-border class if proficx is border', () => {
    component.question = {correct: 1} as IQuestion;
    expect(component.getMyClass(0, 'border')).toBe('border-primary');
  });

  it('sets success if correct', () => {
    component.question = {correct: 1} as IQuestion;
    component.selected = 1;
    expect(component.getMyClass(1, '')).toBe('-success');
  });

  it('sets danger if incorrect', () => {
    component.question = {correct: 1} as IQuestion;
    component.selected = 2;
    expect(component.getMyClass(2, '')).toBe('-danger');
  });

  it('emits on select', () => {
    spyOn(component.select, 'emit');
    component.onSelect(1);
    expect(component.select.emit).toHaveBeenCalledWith(1);
  });

  it('sets seleted on select', () => {
    component.onSelect(10);
    expect(component.selected).toBe(10);
  });
});
