import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilitynorthamericaComponent } from './checkavailabilitynorthamerica.component';

describe('CheckavailabilitynorthamericaComponent', () => {
  let component: CheckavailabilitynorthamericaComponent;
  let fixture: ComponentFixture<CheckavailabilitynorthamericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilitynorthamericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilitynorthamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
