import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilityComponent } from './checkavailability.component';

describe('CheckavailabilityComponent', () => {
  let component: CheckavailabilityComponent;
  let fixture: ComponentFixture<CheckavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
