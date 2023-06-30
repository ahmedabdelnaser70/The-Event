import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketService } from './Service/ticket.service';
import { AddEditSponserComponent } from '../Sponsers/Components/add-edit-sponser/add-edit-sponser.component';
import { PostedEventTicketComponent } from './components/posted-event-ticket/posted-event-ticket.component';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  constructor(
    private _dialog: MatDialog,
    private snackBar: MatSnackBar,
    public sponserService: TicketService
  ) {}

  tickets: any;
  detailsId = 0;
  displayedColumns: string[] = [
    'id',
    'TicketType',
    'TicketPrice',
    'TicketQuantity',
    'EventName',
    'Action',
  ];

  ngOnInit(): void {
    this.sponserService.getAll().subscribe((data: any) => {
      console.log(data);
      this. tickets = new MatTableDataSource(data);
      this. tickets.sort = this.sort;
      this. tickets.paginator = this.paginator;
    });
  }

  openAddSTicketForm() {
    const dialogRef = this._dialog.open(PostedEventTicketComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.ngOnInit();
    });
  }

  remove(id: number) {
    if (confirm('Are you sure')) {
      this.sponserService.deleteTicket(id).subscribe((a) => {
        this.snackBar.open(`ticket has been deleted successfully!`, 'ok', {
          duration: 3000,
          verticalPosition: 'top',
        });
        return this.ngOnInit();
      });
    }
  }

 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this. tickets.filter = filterValue.trim().toLowerCase();

    if (this. tickets.paginator) {
      this. tickets.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
