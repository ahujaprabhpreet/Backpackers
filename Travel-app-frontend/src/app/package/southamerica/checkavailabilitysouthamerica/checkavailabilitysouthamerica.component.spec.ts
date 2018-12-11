import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilitysouthamericaComponent } from './checkavailabilitysouthamerica.component';

describe('CheckavailabilitysouthamericaComponent', () => {
  let component: CheckavailabilitysouthamericaComponent;
  let fixture: ComponentFixture<CheckavailabilitysouthamericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilitysouthamericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilitysouthamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
