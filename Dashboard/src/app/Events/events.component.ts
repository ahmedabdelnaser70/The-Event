import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from './Services/event.service';
import { AddEditEventComponent } from './Components/add-edit-event/add-edit-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private snackBar: MatSnackBar,
    public eventService: EventService
  ) {}

  events: any;
  detailsId = 0;
  displayedColumns: string[] = [
    'id',
    'EventName',
    'DateFrom',
    'DateTo',
    'Description',
    // 'Image',
    'Action',
  ];

  ngOnInit(): void {
    this.eventService.getAll().subscribe((data: any) => {
      console.log(data);

      this.events = new MatTableDataSource(data);
      this.events.sort = this.sort;
      this.events.paginator = this.paginator;
    });
  }

  openAddEventForm() {
    const dialogRef = this._dialog.open(AddEditEventComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.ngOnInit();
    });
  }

  openEditEventForm(data: any) {
    const dialogRef = this._dialog.open(AddEditEventComponent, { data });
    dialogRef.afterClosed().subscribe((d) => {
      if (d) this.ngOnInit();
    });
  }

  remove(id: number) {
    if (confirm('Are you sure')) {
      this.eventService.deleteEvent(id).subscribe((a) => {
        this.snackBar.open(`Event has been deleted successfully!`, 'ok', {
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
    this.events.filter = filterValue.trim().toLowerCase();

    if (this.events.paginator) {
      this.events.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
