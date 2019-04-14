import { Component, OnInit, Input } from '@angular/core';
import { CrackerService } from '../cracker.service';
import { Row } from 'src/models/Row';
import { HexNumber } from 'src/models/HexNumber';
import { Router } from '@angular/router';
import { Character } from 'src/models/Character';

@Component({
  selector: 'app-memory-mapper',
  templateUrl: './memory-mapper.component.html',
  styleUrls: ['./memory-mapper.component.css']
})
export class MemoryMapperComponent implements OnInit {

  public attemptsRemained: number;
  public firstRowNumbers: String[];
  public secondRowNumbers: String[];
  public firstRows: Row[];
  public secondRows: Row[];
  private password: string;
  @Input() in : String;

  public terminal: Character[][];

  constructor(
    private cracker: CrackerService,
    private router: Router
  ) { 
    this.init();
  }

  async init(){

    this.terminal = new Array<Character[]>(15);
    for(var i = 0; i < this.terminal.length; i++){
      this.terminal[i] = new Array<Character>(40);
    }
    this.attemptsRemained = 4;
    let start = Math.floor(Math.random()*1000000);
    console.log(start);
    this.firstRows = new Array<Row>(16);
    this.secondRows = new Array<Row>(16);

    for(var i = 0; i < 16; i++){
      let hexnum = new HexNumber(start)
      let garbage;
      await this.cracker.getGarbageData(12).then(
        (result) => {
          garbage = result;
        }
      );
      this.firstRows[i] = (new Row(hexnum.toString(),garbage));
      start += 12;
    }
    for(var i = 0; i < 16; i++){
      let hexnum = new HexNumber(start)
      let garbage;
      await this.cracker.getGarbageData(12).then(
        (result) => {
          garbage = result;
        }
      );
      this.secondRows[i] = (new Row(hexnum.toString(),garbage));
      start += 12;
    }
  }

  ngOnInit() {
    this.cracker.getPasswords(5,10).then(result =>
      {
        result.subscribe(data => {
          console.log(data);
        })
      });
  }

  clicked(){
    if(this.attemptsRemained == 0){
      this.router.navigateByUrl('fail')
    }
    this.attemptsRemained--;
  }

  scroll(){
    for(var i = 1; i < this.terminal.length; i++){
      this.terminal[i-1] = this.terminal[i];
    }
  }

  newLine(line: String){
    let index = 0;
    for(var i = 0; i < this.terminal.length; i++){
      if(this.terminal[i][0] == null){
        index = i;
        break;
      }
    }
    if(index >= 15){
      scroll();
      index = index - 1;
    }
    let check = 0;
    for(var i = 0; i < line.length; i++){
      this.terminal[index][i] = new Character(false, line[i])
      if(i == 40){
        let arr = 
        this.newLine(line.slice(i+1,line.length));
        return;
      }
    }
  }

  submit(){
    this.newLine(this.in)
    this.in = null;
  }

}
