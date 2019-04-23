import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MemoryMapperComponent } from './memory-mapper/memory-mapper.component';
import { FailComponent } from './fail/fail.component';
var routes = [
    { path: 'passwordCrack', component: PasswordCrackerComponent },
    { path: 'memoryMapper', component: MemoryMapperComponent },
    { path: 'fail', component: FailComponent },
    { path: '**', component: MenuComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map