import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddEditAppointmentComponent } from '../add-edit-appointment/add-edit-appointment.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from 'src/app/Shared/Services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApppointmentService } from '../../Services/appointment.service';
import { DeleteAppointmentComponent } from '../delete-appointment/delete-appointment.component';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent implements OnInit {
  constructor(private _dialog: MatDialog,
    private sharedService: APIService,
    private snackBar: MatSnackBar,
    public appointmentService: ApppointmentService) { }
  ngOnInit(): void {
    this.sharedService.getAllItem("appointments").subscribe((data: any) => {
      this.appointments = new MatTableDataSource(data.Data);
      this.appointments.sort = this.sort;
      this.appointments.paginator = this.paginator;
    })
  }
  openAddAppointmentForm() {
    this._dialog.open(AddEditAppointmentComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.appointments.filter = filterValue.trim().toLowerCase();

    if (this.appointments.paginator) {
      this.appointments.paginator.firstPage();
    }
  }

  remove(id: number) {
    this.appointmentService.deletedId = id;
    this._dialog.open(DeleteAppointmentComponent);
  }

  update(id: number) {
    this.appointmentService.prepareUpdateForm(id);
    this._dialog.open(UpdateAppointmentComponent);
  }

  displayedColumns: string[] = ['Doctor', 'Clinic', 'Date', 'Starts', 'Ends', 'Status', 'Patient', 'Edit', 'Delete'];
  appointments: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

}
