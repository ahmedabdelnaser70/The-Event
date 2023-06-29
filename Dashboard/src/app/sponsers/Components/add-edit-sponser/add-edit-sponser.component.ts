import { Component ,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SponserService } from '../../Services/sponser.service';

@Component({
  selector: 'app-add-edit-sponser',
  templateUrl: './add-edit-sponser.component.html',
  styleUrls: ['./add-edit-sponser.component.scss']
})
export class AddEditSponserComponent {
  constructor(
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEditSponserComponent>,
    public sponserService: SponserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.speakerForm = this.fb.group({
      speakerName: ['', Validators.required],
      speakerBio: ['', Validators.required],
      speakerImage: ['', Validators.required],
    });
  }

  speakerForm: FormGroup;

  ngOnInit(): void {
    this.speakerForm.patchValue(this.data);
    console.log(this.data);
  }

  onFormSubmit() {
    if (this.speakerForm.valid) {
      if (this.data) {
        this.sponserService
          .updateSpeaker(this.data.id, this.speakerForm.value)
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
        this.sponserService.addSpeaker(this.speakerForm.value).subscribe({
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
