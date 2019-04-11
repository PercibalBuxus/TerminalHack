import { Component, OnInit } from '@angular/core';
import { Row } from '../Row';
import { HexNumber } from '../HexNumber';
import { Character } from '../Character';

@Component({
  selector: 'app-memory-mapper',
  templateUrl: './memory-mapper.component.html',
  styleUrls: ['./memory-mapper.component.css']
})
export class MemoryMapperComponent implements OnInit {

  private attemptsRemained: number;
  public rowNumbers: String[];

  constructor() { 
    this.attemptsRemained = 4;
    let start = Math.floor(Math.random()*1000000);
    console.log(start);
    for(var i = 0; i < 32; i++){
      let hexnum = new HexNumber(start)
      this.rowNumbers.push(hexnum.toString());
      start += 12;
    }
  }

  ngOnInit() {
  }

  clicked(){
    this.attemptsRemained--;
  }

}
