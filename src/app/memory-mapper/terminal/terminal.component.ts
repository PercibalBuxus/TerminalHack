import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Buffer } from 'src/models/Buffer';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  @Output() out: EventEmitter<string> = new EventEmitter();
  @Input() inputText: string;
  private output = '';
  private terminal = new Buffer(15);
  private _inputFromParent: String;

  @Input() set inputFromParent(value: String) {
    if(typeof value == 'undefined'){
      return;
    }
    this.output += value;
    this.terminal.push(this.output);
    this.output = this.terminal.toString();
    
  }

  constructor() {
  }

  ngOnInit() {

  }

  add() {
    this.output += this.inputText;
    this.out.emit(this.inputText);
    this.inputText = '';
    this.terminal.push(this.output);
    this.output = this.terminal.toString();
  }

}
