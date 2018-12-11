import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilityasiaComponent } from './checkavailabilityasia.component';

describe('CheckavailabilityasiaComponent', () => {
  let component: CheckavailabilityasiaComponent;
  let fixture: ComponentFixture<CheckavailabilityasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilityasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilityasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
