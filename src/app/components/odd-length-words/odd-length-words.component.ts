import { NgFor} from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd-length-words',
  standalone: true,
  imports:[NgFor],
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css']
})
export class OddLengthWordsComponent {
  @Input() oddWord: string = "";
  @Input() oddsArray: string[] = [];
}
