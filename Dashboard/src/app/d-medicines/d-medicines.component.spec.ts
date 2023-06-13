import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMedicinesComponent } from './d-medicines.component';

describe('DMedicinesComponent', () => {
  let component: DMedicinesComponent;
  let fixture: ComponentFixture<DMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DMedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
