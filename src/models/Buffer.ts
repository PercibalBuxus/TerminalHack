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

    push(str: String){
        //console.log("pushed: " +  str);
        if(typeof str == 'undefined' || str.localeCompare('') == 0){
            return;
        }
        
        let strarr = str.split('\n');
        for(var i = 0; i < strarr.length; i++){
            for(var j = 1; j < this.content.length; j++){
                this.content[j-1] = this.content[j].trim()
            }
            this.content[this.content.length-1] = strarr[i].trim();
        }

    }

    toString(): string {
        console.log(this.content);
        return this.content.join('\n');
    }
}