import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CrackerService } from '../cracker.service';
import { Row } from 'src/models/Row';
import { HexNumber } from 'src/models/HexNumber';
import { Router } from '@angular/router';
import { Character } from 'src/models/Character';
var MemoryMapperComponent = /** @class */ (function () {
    function MemoryMapperComponent(cracker, router) {
        this.cracker = cracker;
        this.router = router;
        this.init();
    }
    MemoryMapperComponent.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i, start, _loop_1, this_1, i, _loop_2, this_2, i;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.terminal = new Array(15);
                        for (i = 0; i < this.terminal.length; i++) {
                            this.terminal[i] = new Array(40);
                        }
                        this.attemptsRemained = 4;
                        start = Math.floor(Math.random() * 1000000);
                        console.log(start);
                        this.firstRows = new Array(16);
                        this.secondRows = new Array(16);
                        _loop_1 = function () {
                            var hexnum, garbage;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        hexnum = new HexNumber(start);
                                        return [4 /*yield*/, this_1.cracker.getGarbageData(12).then(function (result) {
                                                garbage = result;
                                            })];
                                    case 1:
                                        _a.sent();
                                        this_1.firstRows[i] = (new Row(hexnum.toString(), garbage));
                                        start += 12;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 16)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _loop_2 = function () {
                            var hexnum, garbage;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        hexnum = new HexNumber(start);
                                        return [4 /*yield*/, this_2.cracker.getGarbageData(12).then(function (result) {
                                                garbage = result;
                                            })];
                                    case 1:
                                        _a.sent();
                                        this_2.secondRows[i] = (new Row(hexnum.toString(), garbage));
                                        start += 12;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < 16)) return [3 /*break*/, 8];
                        return [5 /*yield**/, _loop_2()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MemoryMapperComponent.prototype.ngOnInit = function () {
        this.terminal = new Array(16);
        for (var i = 0; i < this.terminal.length; i++) {
            this.terminal[i] = new Array(40);
        }
        console.log(this.terminal);
        this.cracker.getPasswords(5, 10).then(function (result) {
            result.subscribe(function (data) {
                console.log(data);
            });
        });
    };
    MemoryMapperComponent.prototype.clicked = function () {
        if (this.attemptsRemained == 0) {
            this.router.navigateByUrl('fail');
        }
        this.attemptsRemained--;
    };
    MemoryMapperComponent.prototype.scroll = function () {
        for (var i = 1; i < this.terminal.length; i++) {
            this.terminal[i - 1] = this.terminal[i];
        }
    };
    MemoryMapperComponent.prototype.newLine = function (line) {
        var index = 0;
        if (line == undefined) {
            return;
        }
        for (var i = 0; i < this.terminal.length; i++) {
            if (typeof this.terminal[i][0] == 'undefined') {
                index = i;
                break;
            }
        }
        if (index >= this.terminal.length - 1) {
            scroll();
            index = index - 1;
        }
        var check = 0;
        for (var i = 0; i < line.length; i++) {
            this.terminal[index][i] = new Character(false, line[i]);
            if (i == 40) {
                var arr = this.newLine(line.slice(i + 1, line.length));
                return;
            }
        }
    };
    MemoryMapperComponent.prototype.submit = function () {
        console.log('Before: ' + this.in);
        this.newLine(this.in);
        console.log('After: ' + this.in);
        this.in = null;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MemoryMapperComponent.prototype, "in", void 0);
    MemoryMapperComponent = tslib_1.__decorate([
        Component({
            selector: 'app-memory-mapper',
            templateUrl: './memory-mapper.component.html',
            styleUrls: ['./memory-mapper.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CrackerService,
            Router])
    ], MemoryMapperComponent);
    return MemoryMapperComponent;
}());
export { MemoryMapperComponent };
//# sourceMappingURL=memory-mapper.component.js.map