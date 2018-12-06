import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilityafricaComponent } from './checkavailabilityafrica.component';

describe('CheckavailabilityafricaComponent', () => {
  let component: CheckavailabilityafricaComponent;
  let fixture: ComponentFixture<CheckavailabilityafricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilityafricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilityafricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
