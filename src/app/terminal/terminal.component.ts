import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Buffer } from 'src/models/Buffer';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  @Output() out: EventEmitter<string> = new EventEmitter();

  private _promptString = "C:\\>";
  private output: string;
  private terminal: Buffer;
  private inputText;
  private _size: number;
  private listen = true;
  public style;

  private memoryMapperStyle = {
    'top': '30%',
    'position': 'absolute',
    'float': 'right',
    'right': '30%'
  }

  private basicStyle = {
    'position': 'relative',
    'float': 'left'
  }

  @Input() showTerminal = true;

  constructor(
    private router: Router,
    private msg: MessageService
  ) {
    this.inputText = '';
    this.size = 15;
    this.terminal = new Buffer(15);
    this.output = this.terminal.toString()
  }

  ngOnInit() {

    this.output = '';
    this.inputText = '';

    setInterval(() => {
      this.terminal.push(this.msg.getTermMessage())
      this.msg.setTermMessage('');
    }, 1000);
  }

  set size(size: number) {
    if (size > 0) {
      this._size = size;
      return;
    }
    console.error('terminal size cannot be less than 0');
  }

  @Input() set promptString(text: string) {
    if (typeof text == 'undefined') {
      return;
    }
    this._promptString = 'C:\\>' + text;
  }

  private helpMsg =
    "help       shows awailable commands\n" +
    "crack      starts password cracker\n" +
    "memorymap  starts memory mapper\n"


  interpret(event: String) {
    let str = event.trim().toUpperCase();
    console.log('Input: ' + str);
    if (this.listen) {
      this.listen = false;
      switch (str) {
        case "HELP":
          this.terminal.push(this.helpMsg.toUpperCase());
          return;
        case "CRACK":
          this.promptString = 'CRACK\\';
          this.showTerminal = false;
          this.router.navigateByUrl('passwordCrack');
          return;
        case "CRACK START":
          this.promptString = 'CRACK\\';
          this.showTerminal = false;
          this.router.navigateByUrl('passwordCrack', { queryParams: { start: false } });
          return;
        case "MEMORYMAP":
          this.showTerminal = true;
          this.style = this.memoryMapperStyle
          this.promptString = 'MEMORYMAP\\'
          this.router.navigateByUrl('memoryMapper');
        case "CLEAR":
          this.terminal = new Buffer(15);
          return;
        default: this.listen = true;
      }
    }
    switch (str) {
      case "EXIT":
        this.exit();
        return;
      default: this.listen = true;
    }
  }

  add() {
    if (this.showTerminal) {
      this.terminal.push(this.inputText);
      this.output = this.terminal.toString();
    }
    this.out.emit(this.inputText.toUpperCase().trim());
    this.msg.setMessage(this.inputText.toUpperCase().trim())
    this.interpret(this.inputText)
    this.inputText = '';
  }

  exit() {
    this.style = this.basicStyle
    this.listen = true;
    this.showTerminal = true
    this._promptString = 'C:\\>';
    this.router.navigateByUrl('');
  }
}
