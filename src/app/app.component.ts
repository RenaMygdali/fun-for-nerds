import { Component, EventEmitter, Output } from '@angular/core';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      EvenLengthWordsComponent,
      OddLengthWordsComponent,
      NgIf,
      FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string = "";
  evenWord: string = "";
  oddWord: string = "";
  evensArray: string[] = [];
  oddsArray: string[] = [];
  isEven: boolean = false;

  onUserInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.isEven = this.inputValue.length % 2 === 0;

    if (this.isEven) {
      this.evenWord = this.inputValue;
      this.oddWord = "";
    } else {
      this.oddWord = this.inputValue;
      this.evenWord = "";
    }
  }

  onSubmit() {
    if (this.isEven) {
      this.evensArray.push(this.inputValue);
    } else {
      this.oddsArray.push(this.inputValue);
    }
    this.inputValue= "";
  }
}
