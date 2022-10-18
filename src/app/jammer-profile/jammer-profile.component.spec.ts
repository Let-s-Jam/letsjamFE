import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JammerProfileComponent } from './jammer-profile.component';

describe('JammerProfileComponent', () => {
  let component: JammerProfileComponent;
  let fixture: ComponentFixture<JammerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JammerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JammerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
