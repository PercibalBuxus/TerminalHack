var HexNumber = /** @class */ (function () {
    function HexNumber(num) {
        this.possibleValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F', 'G', 'H'];
        this.decimalValue = num;
        var size = 0;
        var divider = 1;
        while (num / divider > 1) {
            size++;
            divider = divider * 16;
        }
        divider /= 16;
        this.hexValue = new Array(size);
        var result = 0;
        for (var i = 0; i < size; i++) {
            var temp = Math.floor(num / divider);
            this.hexValue[i] = this.possibleValues[temp];
            num = num - Math.floor(num / divider) * divider;
            divider /= 16;
        }
        console.log(size);
        console.log(this.hexValue);
    }
    HexNumber.prototype.toString = function () {
        return '0x' + this.hexValue.join('');
    };
    return HexNumber;
}());
export { HexNumber };
//# sourceMappingURL=HexNumber.js.map