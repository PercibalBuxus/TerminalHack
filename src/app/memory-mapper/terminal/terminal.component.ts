import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  @Output() out: EventEmitter<string> = new EventEmitter();
  @Input() inputText: string;
  public output: string;
  private newLineCount = 0;
  @Input() inputFromParent: String;

  constructor() {
    this.output = '';
  }

  ngOnInit() {
    for (let index = 0; index <= 13; index++) {
      this.output += '\n'
    }

  }

  add(str?:string) {
    this.output += this.inputText;
    this.out.emit(this.inputText);
    this.inputText = '';
    if (this.output.match(/\n/g).length >= 13 && this.newLineCount == 0) {
      let outputtemp = this.output.split('\n')
      this.output = '';
      for (var i = 1; i < outputtemp.length - 1; i++) {
        this.output += outputtemp[i] + '\n';
      }
    }
    let outputtemp = this.output.split('\n')
    this.output = '';
    for (var i = 1; i < outputtemp.length - 1; i++) {
      this.output += outputtemp[i] + '\n';
    }
    this.newLineCount--;

  }

}
