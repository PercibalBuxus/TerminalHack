import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Buffer } from 'src/models/Buffer';
import { Router, ActivatedRoute } from '@angular/router';
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
  public easterEgg = false;

  private memoryMapperStyle = {
    'top': '30%',
    'position': 'absolute',
    'float': 'right',
    'left': '40%'
  }

  private basicStyle = {
    'position': 'relative',
    'float': 'left'
  }

  @Input() showTerminal = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
      if(this.msg.getTermMessage().localeCompare('') != 0){
        this.terminal.push(this.msg.getTermMessage())
        this.output = this.terminal.toString();
        if(this.msg.getTermMessage().localeCompare('CORRECT') == 0){
          this.clear()
          this.style = this.basicStyle;
        }
        this.msg.setTermMessage('');
      }
    }, 200);
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
    "crack      starts password cracker\n" +
    "doom       starts doom\n" +
    "help       shows awailable commands\n" +
    "memorymap  starts memory mapper\n";



  interpret(event: String) {
    let str = event.trim().toUpperCase();
    console.log('Input: ' + str);

    if (this.listen) {
      this.listen = false;
      switch (str) {
        case "DOOM":
          this.listen = false;
          this.showTerminal = false;
          this.style = {
            'display':'block'
          }
          this.router.navigateByUrl('doom');
          return;
        case "HELP":
          this.terminal.push(this.helpMsg.toUpperCase());
          this.output = this.terminal.toString();
          this.inputText = '';
          this.listen = true
          return;
        case "CRACK":
          this.clear()
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
          this.clear();
          this.showTerminal = true;
          this.style = this.memoryMapperStyle
          this.promptString = 'MEMORYMAP\\'
          this.router.navigateByUrl('memoryMapper');
        
        default: 
          this.terminal.push('UNKNOWN COMMAND'.toUpperCase());
          this.output = this.terminal.toString();
          this.listen = true;
      }
    }
    switch (str) {
      case "CLEAR":
          this.clear()
          return;
      case "EXIT":
        this.clear();
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
    this.clear()
    this.style = this.basicStyle
    this.listen = true;
    this.showTerminal = true
    this._promptString = 'C:\\>';
    this.router.navigateByUrl('');
  }

  clear(){
    this.terminal = new Buffer(15);
    this.output = this.terminal.toString()
  }

  exitfromeasteregg(){
    this.style = this.basicStyle;
    this.router.navigateByUrl('');
    this.clear()
  }
}
