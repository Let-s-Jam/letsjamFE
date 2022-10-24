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

    const data = {
      "data": {
        "type": "user",
        "id": "1",
        "attributes": {
          "connections_pending": [
            {
              "id": "3",
              "name": "Cory",
              "about": "about cory",
              "picture_url": "anotherurl.com",
              "instruments": [
                {
                  "name": "guitar",
                  "id": "2"
                }
              ],
              "needs_instruments": [],
              "genres": [
                {
                  "name": "rock",
                  "id": "1"
                }
              ]
            }
          ],
          "requests_pending": [],
          "connections": [
            {
              "id": "2",
              "name": "Cory",
              "display_email": "email2@email.com",
              "about": "about cory",
              "zipcode": "12345",
              "picture_url": "anotherurl.com",
              "instruments": [],
              "needs_instruments": [],
              "genres": []
            }
          ]
        }
      }
    }

    fixture = TestBed.createComponent(AcceptedJammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
