import { async, TestBed } from '@angular/core/testing';
import { MemoryMapperComponent } from './memory-mapper.component';
describe('MemoryMapperComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MemoryMapperComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MemoryMapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=memory-mapper.component.spec.js.map