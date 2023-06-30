import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelService } from '../../Services/hotel.service';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.scss'],
})
export class AddEditHotelComponent {
  constructor(
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEditHotelComponent>,
    public hotelService: HotelService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      hotelAddress: ['', Validators.required],
      hotelDescription: ['', Validators.required],
      hotelContactinfo: ['', Validators.required],
      hotelImage: ['', Validators.required],
    });
  }

  hotelForm: FormGroup;

  ngOnInit(): void {
    this.hotelForm.patchValue(this.data);
    console.log(this.data);
  }

  onFormSubmit() {
    if (this.hotelForm.valid) {
      if (this.data) {
        this.hotelService
          .updateHotel(this.data.id, this.hotelForm.value)
          .subscribe({
            next: (val: any) => {
              console.log(val);

              alert('Speaker Details Updated');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.hotelService.addHotel(this.hotelForm.value).subscribe({
          next: (val: any) => {
            alert('Speaker Added');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
