export class HexNumber{
    public decimalValue: number;
    private hexValue: String[];
    private possibleValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','F','G','H']

    constructor(num: number){
        this.decimalValue = num;
        let size = 0;
        let divider = 1;
        while(num/divider > 1){
            size++;
            divider = divider *16;
        }
        divider /= 16;

        this.hexValue = new Array<String>(size);
        let result = 0;

        for(var i = 0; i < size; i++){
            let temp = Math.floor(num/divider);
            this.hexValue[i] = this.possibleValues[temp];
            num = num-Math.floor(num/divider)*divider;
            divider/=16;
        }

        console.log(size);
        console.log(this.hexValue);
    }

    toString(){
        return '0x' + this.hexValue.join('');
    }
}