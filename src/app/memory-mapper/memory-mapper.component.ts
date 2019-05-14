import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CrackerService } from '../cracker.service';
import { Row } from 'src/models/Row';
import { HexNumber } from 'src/models/HexNumber';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-memory-mapper',
  templateUrl: './memory-mapper.component.html',
  styleUrls: ['./memory-mapper.component.css']
})
export class MemoryMapperComponent implements OnInit {

  private attemptsRemained = 4;
  public firstRowNumbers: String[];
  public secondRowNumbers: String[];
  public firstRows = new Array<Row>(16);
  public secondRows = new Array<Row>(16);
  private password: String;
  private passwords: String[];
  private line: number;
  private rawRow: String;
  public loaded = false;
  private start = undefined;
  @Input() in: String;

  public termMsg: string;

  constructor(
    private cracker: CrackerService,
    private router: Router,
    private msg: MessageService
  ) {}

  ngOnInit() {
    this.init();

    setInterval(()=>{
      if(this.passwords.includes(this.msg.getMessage())) {
        this.onTerminalInput(this.msg.getMessage());
        this.msg.setMessage('');
      }
    },1000)
  }

  async init() {

    let numberOfPassWords = 8;
    let passwordLength = 5;

    await this.cracker.getGarbageData(384).then(res => {
      this.rawRow = res;
    });

    await this.cracker.getPasswords(passwordLength, numberOfPassWords).then(result => {
      result.subscribe(data => {

        this.passwords = data;
        //console.log(this.passwords)
        let randomnum = Math.floor(Math.random() * numberOfPassWords).valueOf()
        //console.log(randomnum)
        this.password = this.passwords[randomnum]
        console.log(this.password)

        for (var i = 0; i < numberOfPassWords; i++) {
          let fraction = Math.floor(this.rawRow.length / 8);
          let rand = (Math.floor(Math.random() * fraction))

          if (rand > fraction - passwordLength) {
            rand = fraction - passwordLength
          }
          rand += fraction * i;
          this.rawRow = this.insertIntoString(this.passwords[i], this.rawRow, rand);
        }

        this.setRows();

      })
    });
  }

  setRows() {
    if (typeof this.start == 'undefined') {
      this.start = Math.floor(Math.random() * 1000000);  //a számozás kezdete
    }

    let firstColumn = this.rawRow.substring(0, 12 * 16);
    let secondColumn = this.rawRow.substring(12 * 16, this.rawRow.length)

    let start = this.start;

    //feltölti a sorokat sorszammal és garbage dataval
    for (var i = 0; i < 16; i++) {
      let hexnum = new HexNumber(start)
      this.firstRows[i] = (new Row(hexnum.toString(), firstColumn.substring(i * 12, ((i + 1) * 12))));
      start += 12;
    }

    for (var i = 0; i < 16; i++) {
      let hexnum = new HexNumber(start)
      this.secondRows[i] = (new Row(hexnum.toString(), secondColumn.substring(i * 12, ((i + 1) * 12))));
      start += 12;
    }
    this.loaded = true;
    //console.log(this.rawRow)
  }

  insertIntoString(insert: String, into: String, index: number): String {
    let arr = into.split('');
    for (var i = 0; i < insert.length; i++) {
      arr[(index + i)] = insert[i];
    }
    return arr.join('');
  }

  onTerminalInput(event: String) {
    //if the password equals to the event the router redirects the usert to the private component

    if(typeof event == 'undefined'){
      return;
    }

    event = event.toUpperCase().trim();

    let replaceString = '';
    for (var i = 0; i < this.password.length; i++) {
      replaceString += '.';
    }

    let spaces = '';

    for (var i = 0; i < this.attemptsRemained; i++) {
      spaces += ' ';
    }

    if (this.password.toUpperCase().localeCompare(event.toString()) == 0) {

      this.termMsg = ("CORRECT")

      for (let index = 0; index < this.passwords.length; index++) {
        //console.log(this.passwords[index].toString())
        //console.log(this.rawRow.indexOf(this.passwords[index].toString(),1))
        this.rawRow = this.rawRow.replace(this.passwords[index].trim(), replaceString)
        this.setRows();
      }
      this.msg.setTermMessage(this.termMsg)

      setTimeout(() => {
        this.router.navigateByUrl('private');
      }, 5000);
    }
    //else compares the two string and calculate the difference
    else {

      let comp = 0;
      let eventArray = event.split('');  //we split the event and the password into characters to be able to compare
      let passwdArray = this.password.split('');

      if (this.passwords.includes(event.trim().toUpperCase())) {
        this.rawRow = this.rawRow.replace(event.toString(),replaceString)
        this.setRows()
      }

      for (var i = 0; i < eventArray.length; i++) {
        if (eventArray[i] == passwdArray[i]) {
          comp++;
        }
      }


      this.termMsg = ('incorrect:\n' + comp + '/' + this.password.length + spaces +'\n');
      console.log(this.termMsg)
      this.msg.setTermMessage(this.termMsg)

      if (this.attemptsRemained == 0) {
        this.router.navigateByUrl('fail');
        this.msg.setTermMessage('FAILED');
      }

      this.attemptsRemained--;
      
      
    }
  }
}
