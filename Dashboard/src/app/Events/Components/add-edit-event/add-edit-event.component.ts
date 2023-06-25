import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from '../../Services/event.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.scss'],
})
export class AddEditEventComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private diaglog: MatDialog,
    private _dialogRef: MatDialogRef<AddEditEventComponent>,
    public eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.eventForm = fb.group({
      eventName: '',
      eventDescription: '',
      dateFrom: '',
      dateTo: '',
      image: '',
      speakers: '',
      sponsers: '',
    });
  }

  eventForm: FormGroup;
  speakers: any;
  sponsers: any;
  dialog = this.diaglog;

  ngOnInit(): void {
    this.eventForm.patchValue(this.data);
    // this.speakerService.getAll().subscribe(data => {
    //   this.speakers = data;
    // }, err => {
    //   alert("wrong")
    // })

    // this.sponserService.getAll().subscribe(data => {
    //   this.sponsers = data;
    // })
  }

  close() {
    this.dialog.closeAll();
  }

  onFormSubmit() {
    if (this.eventForm.valid) {
      if (this.data) {
        this.eventService
          .updateEvent(this.data.id, this.eventForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Event Details Updated');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.eventService.addEvent(this.eventForm.value).subscribe({
          next: (val: any) => {
            alert('Event Added');
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
