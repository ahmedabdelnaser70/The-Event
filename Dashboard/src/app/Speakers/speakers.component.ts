import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpeakerService } from './Services/speaker.service';
import { AddEditSpeakerComponent } from './Components/add-edit-speaker/add-edit-speaker.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private snackBar: MatSnackBar,
    public speakerService: SpeakerService
  ) {}

  speakers: any;
  detailsId = 0;
  displayedColumns: string[] = [
    'id',
    'SpeakerName',
    'Events',
    // 'Image',
    'Action',
  ];

  ngOnInit(): void {
    this.speakerService.getAll().subscribe((data: any) => {
      console.log(data);
      this.speakers = new MatTableDataSource(data);
      this.speakers.sort = this.sort;
      this.speakers.paginator = this.paginator;
    });
  }

  openAddSpeakerForm() {
    const dialogRef = this._dialog.open(AddEditSpeakerComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.ngOnInit();
    });
  }

  openEditSpeakerForm(data: any) {
    const dialogRef = this._dialog.open(AddEditSpeakerComponent, { data });
    dialogRef.afterClosed().subscribe((d) => {
      if (d) this.ngOnInit();
    });
  }

  remove(id: number) {
    if (confirm('Are you sure')) {
      this.speakerService.deleteSpeaker(id).subscribe((a) => {
        this.snackBar.open(`Speaker has been deleted successfully!`, 'ok', {
          duration: 3000,
          verticalPosition: 'top',
        });
        return this.ngOnInit();
      });
    }
  }

  update(id: number) {
    // this.appointmentService.prepareUpdateForm(id);
    // this._dialog.open(UpdateAppointmentComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.speakers.filter = filterValue.trim().toLowerCase();

    if (this.speakers.paginator) {
      this.speakers.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
