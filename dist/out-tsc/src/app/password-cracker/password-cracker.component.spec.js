import { async, TestBed } from '@angular/core/testing';
import { PasswordCrackerComponent } from './password-cracker.component';
describe('PasswordCrackerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PasswordCrackerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PasswordCrackerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=password-cracker.component.spec.js.map