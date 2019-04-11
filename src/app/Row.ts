import {Character} from './Character';
import { isDefined } from '@angular/compiler/src/util';
import { throws } from 'assert';

export class Row{
    rowNumber: number;
    char: Character[];
    constructor(rowNumber: number,second: any){
        this.rowNumber = rowNumber;
        console.log(typeof(second));
        if(second[0] instanceof Character){
            console.log('got Character')
            this.char = second;
        }
        else if(second instanceof String){
            console.log('got String')
            let arr = second.split('');
            this.char = new Array<Character>(arr.length);
            for(var i = 0; i < arr.length; i++){
                this.char.push(new Character(false,arr[i]));
            }
        }
        else{
            console.log("incorrect second parameter")
        }
        
    }
}