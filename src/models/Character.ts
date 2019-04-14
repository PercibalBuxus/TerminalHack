export class Character{
    partOfPassword: boolean;
    char: string;
    
    constructor(partOfPassword: boolean, char: string){
        this.partOfPassword = partOfPassword;
        if(char.length > 1){
            throw new Error('constructor expects char (string with length of 1), string given');
        }
        this.char = char;
    }
}