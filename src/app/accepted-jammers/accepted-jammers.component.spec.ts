import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedJammersComponent } from './accepted-jammers.component';

describe('AcceptedJammersComponent', () => {
  let component: AcceptedJammersComponent;
  let fixture: ComponentFixture<AcceptedJammersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedJammersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedJammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
