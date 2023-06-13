import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsersDetailsComponent } from './sponsers-details.component';

describe('SponsersDetailsComponent', () => {
  let component: SponsersDetailsComponent;
  let fixture: ComponentFixture<SponsersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
