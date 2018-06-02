import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { TriviaComponent } from './trivia/trivia.component';
import { GameResultComponent } from './game-result/game-result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TriviaComponent,
    GameResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
