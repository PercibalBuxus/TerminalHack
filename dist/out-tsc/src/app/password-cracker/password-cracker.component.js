import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CrackerService } from '../cracker.service';
var PasswordCrackerComponent = /** @class */ (function () {
    function PasswordCrackerComponent(cracker) {
        this.cracker = cracker;
    }
    PasswordCrackerComponent.prototype.ngOnInit = function () {
        this.show = false;
    };
    PasswordCrackerComponent.prototype.crack = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var variable;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.size = (Math.random() * 24) + 8;
                        this.show = true;
                        console.log("started");
                        return [4 /*yield*/, setInterval(function () {
                                _this.tempstr = _this.cracker.randomString(_this.size).split('');
                            }, 50)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cracker.crack(this.size)
                                .then(function (result) {
                                _this.str = result.split('');
                                _this.show = false;
                                console.log(result);
                                console.log("finished");
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PasswordCrackerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-password-cracker',
            templateUrl: './password-cracker.component.html',
            styleUrls: ['./password-cracker.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CrackerService])
    ], PasswordCrackerComponent);
    return PasswordCrackerComponent;
}());
export { PasswordCrackerComponent };
//# sourceMappingURL=password-cracker.component.js.map