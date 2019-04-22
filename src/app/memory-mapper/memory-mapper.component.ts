import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { CrackerService } from '../cracker.service';
import { Row } from 'src/models/Row';
import { HexNumber } from 'src/models/HexNumber';
import { Router } from '@angular/router';

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
  @Input() in: String;

  public termMsg : string;

  constructor(
    private cracker: CrackerService,
    private router: Router
  ) {

    this.init();
  }

  ngOnInit() {

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

          if(rand > fraction-passwordLength){
            rand = fraction-passwordLength
          }
          rand += fraction*i;
          this.rawRow = this.insertIntoString(this.passwords[i], this.rawRow, rand);
        }

        this.setRows();
      })
    });
  }

  setRows() {
    let start = Math.floor(Math.random() * 1000000);  //a számozás kezdete

    let firstColumn = this.rawRow.substring(0, 12 * 16);
    let secondColumn = this.rawRow.substring(12 * 16, this.rawRow.length)

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
  }

  insertIntoString(insert: String, into: String, index: number): String {
    let arr = into.split('');
    for (var i = 0; i < insert.length; i++) {
      arr[(index + i)] = insert[i];
    }
    return arr.join('');
  }

  onTerminalInput(event: String) {
    if(this.password.toUpperCase().localeCompare(event.toUpperCase().trim()) == 0){
      this.termMsg = ("correct")
      setTimeout(() => {
        this.router.navigateByUrl('private');
      },5000);
    }
    else{
      let comp = 0;
      let eventArray = event.toUpperCase().trim().split('');
      let passwdArray = this.password.split('');
      for(var i = 0; i < this.password.length; i++){
        if(eventArray[i] == passwdArray[i]){
          comp++;
        }
      }
      this.termMsg = ('incorrect:\n' + comp + '/' + this.password.length + '\n');
      console.log(this.termMsg)
      if(this.attemptsRemained == 0){
        this.router.navigateByUrl('fail');
      }
      this.attemptsRemained--;
    }
  }

}
