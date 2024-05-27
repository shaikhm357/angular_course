import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WanningAlertComponent } from './wanning-alert.component';

describe('WanningAlertComponent', () => {
  let component: WanningAlertComponent;
  let fixture: ComponentFixture<WanningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WanningAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WanningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
