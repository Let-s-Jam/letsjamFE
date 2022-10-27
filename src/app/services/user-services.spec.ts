import { UserService } from "./user-service";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
    let service: UserService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [UserService],
        imports: [HttpClientModule]
      });
  
      service = TestBed.inject(UserService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });