import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotelService } from './Services/hotel.service';
import { AddEditHotelComponent } from './Components/add-edit-hotel/add-edit-hotel.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private snackBar: MatSnackBar,
    public hotelService: HotelService
  ) {}

  hotels: any;
  detailsId = 0;
  displayedColumns: string[] = [
    'id',
    'HotelName',
    'HotelAddress',
    // 'Image',
    'Action',
  ];

  ngOnInit(): void {
    this.hotelService.getAll().subscribe((data: any) => {
      console.log(data);
      this.hotels = new MatTableDataSource(data);
      this.hotels.sort = this.sort;
      this.hotels.paginator = this.paginator;
    });
  }

  openAddHotelForm() {
    const dialogRef = this._dialog.open(AddEditHotelComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.ngOnInit();
    });
  }

  openEditHotelForm(data: any) {
    const dialogRef = this._dialog.open(AddEditHotelComponent, { data });
    dialogRef.afterClosed().subscribe((d) => {
      if (d) this.ngOnInit();
    });
  }

  remove(id: number) {
    if (confirm('Are you sure')) {
      this.hotelService.deleteHotel(id).subscribe((a) => {
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
    this.hotels.filter = filterValue.trim().toLowerCase();

    if (this.hotels.paginator) {
      this.hotels.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
