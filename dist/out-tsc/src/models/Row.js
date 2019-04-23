import { Character } from './Character';
var Row = /** @class */ (function () {
    function Row(rowNumber, second) {
        this.rowNumber = rowNumber;
        console.log(typeof (second));
        if (second[0] instanceof Character) {
            console.log('got Character');
            this.char = second;
        }
        else if (second instanceof Object) {
            console.log('incorrect second parameter');
        }
        else if (typeof (second) == 'string') {
            console.log('got string');
            var arr = second.split('');
            console.log(arr);
            this.char = new Array(arr.length);
            for (var i = 0; i < arr.length; i++) {
                this.char[i] = new Character(false, arr[i]);
            }
            console.log(this.char);
        }
    }
    Row.prototype.toString = function () {
        var str = "";
        for (var i = 0; i < this.char.length; i++) {
            str += this.char[i].char;
        }
        return str;
    };
    return Row;
}());
export { Row };
//# sourceMappingURL=Row.js.map