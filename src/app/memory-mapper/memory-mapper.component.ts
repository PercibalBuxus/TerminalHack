import { Component, OnInit, Input } from '@angular/core';
import { CrackerService } from '../cracker.service';
import { Row } from 'src/models/Row';
import { HexNumber } from 'src/models/HexNumber';
import { Router } from '@angular/router';
import { Character } from 'src/models/Character';
import { debug } from 'util';

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
  @Input() in: String;

  private term: string;

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
        console.log(this.passwords);
        let randomnum = Math.floor(Math.random() * numberOfPassWords + 1).valueOf()
        console.log(this.passwords[randomnum])
        this.password = this.passwords[randomnum]

        for (var i = 0; i < numberOfPassWords; i++) {
          let fraction = Math.floor(this.rawRow.length / 8);
          console.log("fraction: " + fraction)
          this.rawRow = this.insertIntoString(this.passwords[i], this.rawRow, (Math.floor(Math.random() * (fraction*(i+1)))));
        }

        this.setRows();
      })
    });
  }

  setRows() {
    let start = Math.floor(Math.random() * 1000000);  //a számozás kezdete

    let firstColumn = this.rawRow.substring(0, 12 * 16);
    let secondColumn = this.rawRow.substring(12 * 16, this.rawRow.length)

    if (firstColumn.length == secondColumn.length) {
      console.log("sikeres vágás");
    }

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
  }

  insertIntoString(insert: String, into: String, index: number): String {
    let arr = into.split('');
    for (var i = 0; i < insert.length; i++) {
      arr[(index + i)] = insert[i];
    }
    return arr.join('');
  }

  onTerminalInput(event: String) {
    //TODO implement password check logic
    if(this.password.toUpperCase().localeCompare(event.toUpperCase().trim()) == 0){
      console.log("Helyes")
    }
  }

}
