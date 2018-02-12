import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSidemenuComponent } from './dash-sidemenu.component';

describe('DashSidemenuComponent', () => {
  let component: DashSidemenuComponent;
  let fixture: ComponentFixture<DashSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
