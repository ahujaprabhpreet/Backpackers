import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilityaustraliaComponent } from './checkavailabilityaustralia.component';

describe('CheckavailabilityaustraliaComponent', () => {
  let component: CheckavailabilityaustraliaComponent;
  let fixture: ComponentFixture<CheckavailabilityaustraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilityaustraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilityaustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
