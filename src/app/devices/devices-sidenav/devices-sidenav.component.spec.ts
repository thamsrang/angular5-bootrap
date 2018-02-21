import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesSidenavComponent } from './devices-sidenav.component';

describe('DevicesSidenavComponent', () => {
  let component: DevicesSidenavComponent;
  let fixture: ComponentFixture<DevicesSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
