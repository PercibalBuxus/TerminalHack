import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
var CrackerService = /** @class */ (function () {
    function CrackerService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    CrackerService.prototype.randomString = function (size) {
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789!+?.-_@&#><';
        var arr = this.shuffle(characters);
        var str = new Array();
        for (var i = 0; i < size; i++) {
            str.push(arr[i]);
        }
        return str.join('');
    };
    CrackerService.prototype.shuffle = function (str) {
        var arr = str.split('');
        var j, temp;
        for (var i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr.join('');
    };
    CrackerService.prototype.randomGarbageData = function (size) {
        var characters = '!+?.-_@&#><[](){}';
        var arr = this.shuffle(characters).split('');
        var str = new Array();
        for (var i = 0; i < size; i++) {
            arr = this.shuffle(arr.join('')).split('');
            str.push(arr[i]);
        }
        return str.join('');
    };
    CrackerService.prototype.crack = function (size) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                console.log("wait");
                                resolve(_this.randomString(size));
                            }, Math.floor((Math.random() * 10) + 1) * 1000);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrackerService.prototype.getGarbageData = function (size) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.randomGarbageData(size)];
            });
        });
    };
    CrackerService.prototype.getPasswords = function (size, quantity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var param;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = new HttpParams()
                            .set("size", size.toString())
                            .set("quantity", quantity.toString());
                        return [4 /*yield*/, new Promise(function (resolve) {
                                resolve(_this.http.get("/passwords", { params: param }));
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrackerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CrackerService);
    return CrackerService;
}());
export { CrackerService };
//# sourceMappingURL=cracker.service.js.map