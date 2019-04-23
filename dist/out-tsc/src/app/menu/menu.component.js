import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        console.log("OK");
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.toMemoryMapper = function () {
        this.router.navigateByUrl('memoryMapper');
    };
    MenuComponent.prototype.toPasswordCrack = function () {
        this.router.navigateByUrl('passwordCrack');
    };
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map