import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDTIcketComponent } from './addticket.component';

describe('ADDTIcketComponent', () => {
  let component: ADDTIcketComponent;
  let fixture: ComponentFixture<ADDTIcketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDTIcketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDTIcketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
