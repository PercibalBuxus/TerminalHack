import { Content } from '@angular/compiler/src/render3/r3_ast';

export class Buffer{
    public size: number;
    public content: string[];

    constructor(size:number){
        this.size = size;
        this.content = new Array<string>(size);
        for(var i = 0; i < size; i++){
            this.content[i] = '\n';
        }
    }

    push(str: string){
        let strarr = str.split('\n');
        for(var i = 0; i < strarr.length; i++){
            for(var j = 1; j < this.content.length; j++){
                this.content[j-1] = this.content[j]
            }
            this.content[this.content.length-1] = strarr[i];
        }

    }

    toString(): string{
        return this.content.join('\n');
    }
}