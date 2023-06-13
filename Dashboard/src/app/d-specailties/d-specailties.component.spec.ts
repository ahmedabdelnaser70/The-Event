import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSpecailtiesComponent } from './d-specailties.component';

describe('DSpecailtiesComponent', () => {
  let component: DSpecailtiesComponent;
  let fixture: ComponentFixture<DSpecailtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSpecailtiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSpecailtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
