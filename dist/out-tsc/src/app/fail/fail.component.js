import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var FailComponent = /** @class */ (function () {
    function FailComponent(router) {
        this.router = router;
    }
    FailComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl('');
        }, 5000);
    };
    FailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-fail',
            templateUrl: './fail.component.html',
            styleUrls: ['./fail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], FailComponent);
    return FailComponent;
}());
export { FailComponent };
//# sourceMappingURL=fail.component.js.map