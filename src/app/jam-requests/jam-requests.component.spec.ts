import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamRequestsComponent } from './jam-requests.component';

describe('JamRequestsComponent', () => {
  let component: JamRequestsComponent;
  let fixture: ComponentFixture<JamRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JamRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
