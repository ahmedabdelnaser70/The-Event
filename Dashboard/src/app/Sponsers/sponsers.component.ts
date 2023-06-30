import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SponserService } from './Services/sponser.service';
import { AddEditSponserComponent } from './Components/add-edit-sponser/add-edit-sponser.component';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss'],
})
export class SponsersComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private snackBar: MatSnackBar,
    public sponserService: SponserService
  ) {}

  sponsers: any;
  detailsId = 0;
  displayedColumns: string[] = [
    'id',
    'SponserName',
    'Events',
    // 'Image',
    'Action',
  ];

  ngOnInit(): void {
    this.sponserService.getAll().subscribe((data: any) => {
      console.log(data);
      this.sponsers = new MatTableDataSource(data);
      this.sponsers.sort = this.sort;
      this.sponsers.paginator = this.paginator;
    });
  }

  openAddSponserForm() {
    const dialogRef = this._dialog.open(AddEditSponserComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.ngOnInit();
    });
  }

  openEditSponserForm(data: any) {
    const dialogRef = this._dialog.open(AddEditSponserComponent, { data });
    dialogRef.afterClosed().subscribe((d) => {
      if (d) this.ngOnInit();
    });
  }

  remove(id: number) {
    if (confirm('Are you sure')) {
      this.sponserService.deleteSponser(id).subscribe((a) => {
        this.snackBar.open(`sponser has been deleted successfully!`, 'ok', {
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
    this.sponsers.filter = filterValue.trim().toLowerCase();

    if (this.sponsers.paginator) {
      this.sponsers.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
