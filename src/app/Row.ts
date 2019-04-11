import {Character} from './Character';

export class Row{
    rowNumber: number;
    char: Character[];
    constructor(rowNumber: number,char: Character[]){
        this.rowNumber = rowNumber;
        this.char = char;
    }
}