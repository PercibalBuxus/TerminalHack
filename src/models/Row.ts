import { Character } from './Character';

export class Row{
    rowNumber: string;
    char: Character[];
    constructor(rowNumber: string,second: any){
        this.rowNumber = rowNumber;
        //console.log(typeof(second));
        if(second[0] instanceof Character){
            //console.log('got Character')
            this.char = second;
        }
        else if(second instanceof Object){
            //console.log('incorrect second parameter')
        }
        else if(typeof(second) == 'string'){
            //console.log('got string')
            let arr = second.split('');
            //console.log(arr);
            this.char = new Array<Character>(arr.length);
            for(var i = 0; i < arr.length; i++){
                this.char[i]= new Character(false,arr[i]);
            }
            //console.log(this.char);
        }
        
    }

    toString(){
        let str = "";
        for(var i = 0; i < this.char.length; i++){
            str += this.char[i].char;
        }
        return str;
    }
}