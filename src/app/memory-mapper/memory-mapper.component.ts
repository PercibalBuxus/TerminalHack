import { Component, OnInit } from '@angular/core';
import { Row } from '../Row';
import { HexNumber } from '../HexNumber';
import { Character } from '../Character';
import { CrackerService } from '../cracker.service';

@Component({
  selector: 'app-memory-mapper',
  templateUrl: './memory-mapper.component.html',
  styleUrls: ['./memory-mapper.component.css']
})
export class MemoryMapperComponent implements OnInit {

  private attemptsRemained: number;
  public firstRowNumbers: String[];
  public secondRowNumbers: String[];
  public firstRows: Row[];
  public secondRows: Row[];

  constructor(
    private cracker: CrackerService
  ) { 
    this.attemptsRemained = 4;
    let start = Math.floor(Math.random()*1000000);
    console.log(start);
    this.firstRowNumbers = new Array<String>(16);
    this.secondRowNumbers = new Array<String>(16);
    this.firstRows = new Array<Row>(16);
    this.secondRows = new Array<Row>(16);

    for(var i = 0; i < 16; i++){
      let hexnum = new HexNumber(start)
      this.firstRowNumbers.push(hexnum.toString());
      this.firstRows.push(new Row(hexnum.decimalValue,this.cracker.randomString(12)));
      start += 12;
    }
    for(var i = 0; i < 16; i++){
      let hexnum = new HexNumber(start)
      this.secondRowNumbers.push(hexnum.toString());
      this.secondRows.push(new Row(hexnum.decimalValue,new String(this.cracker.randomString(12))));
      start += 12;
    }
  }

  ngOnInit() {
  }

  clicked(){
    this.attemptsRemained--;
  }

}
