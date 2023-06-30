import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SponserService } from '../../Services/sponser.service';

@Component({
  selector: 'app-add-edit-sponser',
  templateUrl: './add-edit-sponser.component.html',
  styleUrls: ['./add-edit-sponser.component.scss'],
})
export class AddEditSponserComponent {
  constructor(
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEditSponserComponent>,
    public sponserService: SponserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.sponsorForm = this.fb.group({
      sponsorName: ['', Validators.required],
      sponsorDetails: ['', Validators.required],
      sponsorLogo: ['', Validators.required],
    });
  }

  sponsorForm: FormGroup;

  ngOnInit(): void {
    this.sponsorForm.patchValue(this.data);
    console.log(this.data);
  }

  onFormSubmit() {
    if (this.sponsorForm.valid) {
      if (this.data) {
        this.sponserService
          .updateSponser(this.data.id, this.sponsorForm.value)
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
        this.sponserService.addSponser(this.sponsorForm.value).subscribe({
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
