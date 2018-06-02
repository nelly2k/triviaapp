import {TestBed, inject} from '@angular/core/testing';

import {QuestionProviderService} from './question-provider.service';

describe('QuestionProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [QuestionProviderService]});
  });

  it('should be created', inject([QuestionProviderService], (service : QuestionProviderService) => {
    expect(service).toBeTruthy();
  }));

  it('converts questions on start', inject([QuestionProviderService], (service : QuestionProviderService) => {
    service.start();
    expect(service.pool.length).toBe(20);
  }));

  it('returns question from pool on get', inject([QuestionProviderService], (service : QuestionProviderService) => {
    service.start();
    const question = service.getNextQuestion();
    expect(question).toBeDefined();
  }));

  it('removes question from pool on get', inject([QuestionProviderService], (service : QuestionProviderService) => {
    service.start();
    const question = service.getNextQuestion();
    expect(service.pool.length).toBe(19);
  }));
  
});
