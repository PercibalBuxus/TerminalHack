import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Buffer } from 'src/models/Buffer';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  @Output() out: EventEmitter<string> = new EventEmitter();

  private output = '';
  private terminal: Buffer;
  private _inputText;


  constructor() {
    this._inputText = '';
    this.terminal = new Buffer(15);
    this.output = this.terminal.toString()
  }

  ngOnInit() {
    this._inputText = '';
    document.getElementById('output').setAttribute("rows","15") 
  }

  @Input() set inputText(value: string){
    //console.log(value)
    if(this._inputText.localeCompare('') != 0){
      return;
    }
    else if(typeof this._inputText == 'undefined'){
      return;
    }
    this._inputText = value;
    this.terminal.push(this._inputText);
    this._inputText = '';
    this.output = this.terminal.toString();
    console.log(this.output.split('\n'));
  };

  add() {
    this.out.emit(this._inputText);
    this.terminal.push(this._inputText);
    this._inputText = '';
    this.output = this.terminal.toString();
    console.log(this.output.split('\n'));
  }

}
