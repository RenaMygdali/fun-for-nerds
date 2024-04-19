import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports:[NgFor],
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css']
})
export class EvenLengthWordsComponent {
  @Input() evenWord: string = "";
  @Input() evensArray: string[] = [];
}
