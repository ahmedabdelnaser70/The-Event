import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersDetailsComponent } from './speakers-details.component';

describe('SpeakersDetailsComponent', () => {
  let component: SpeakersDetailsComponent;
  let fixture: ComponentFixture<SpeakersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
