import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesTagsComponent } from './devices-tags.component';

describe('DevicesTagsComponent', () => {
  let component: DevicesTagsComponent;
  let fixture: ComponentFixture<DevicesTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
