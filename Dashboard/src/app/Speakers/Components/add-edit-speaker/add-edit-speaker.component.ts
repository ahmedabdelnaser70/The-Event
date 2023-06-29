import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpeakerService } from '../../Services/speaker.service';

@Component({
  selector: 'app-add-edit-speaker',
  templateUrl: './add-edit-speaker.component.html',
  styleUrls: ['./add-edit-speaker.component.scss'],
})
export class AddEditSpeakerComponent {
  constructor(
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEditSpeakerComponent>,
    public speakerService: SpeakerService,
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
        this.speakerService
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
        this.speakerService.addSpeaker(this.speakerForm.value).subscribe({
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
