import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesCategoriesComponent } from './devices-categories.component';

describe('DevicesCategoriesComponent', () => {
  let component: DevicesCategoriesComponent;
  let fixture: ComponentFixture<DevicesCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
