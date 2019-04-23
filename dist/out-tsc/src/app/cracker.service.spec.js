import { TestBed } from '@angular/core/testing';
import { CrackerService } from './cracker.service';
describe('CrackerService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CrackerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cracker.service.spec.js.map