import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTIcketComponent } from './delete-ticket.component';

describe('DeleteTIcketComponent', () => {
  let component: DeleteTIcketComponent;
  let fixture: ComponentFixture<DeleteTIcketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTIcketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTIcketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
