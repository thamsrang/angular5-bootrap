import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesSettingsComponent } from './devices-settings.component';

describe('DevicesSettingsComponent', () => {
  let component: DevicesSettingsComponent;
  let fixture: ComponentFixture<DevicesSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
