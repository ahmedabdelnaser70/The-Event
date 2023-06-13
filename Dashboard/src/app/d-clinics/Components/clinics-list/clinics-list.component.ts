import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { APIService } from 'src/app/Shared/Services/api.service';
import { APIResponseVM } from 'src/app/Shared/ViewModels/apiresponse-vm';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';
import { IClinic } from '../../Models/iclinic';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.scss']
})

export class ClinicsListComponent implements OnInit, OnChanges, AfterViewInit {
  displayedColumns: string[] = ['city', 'street', 'building', 'mobilePhone', 'doctors', 'details', 'update', 'availability'];
  dataSource = new MatTableDataSource<IClinic>()
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  clinicData: IClinic[];

  constructor(private http: APIService) {
    this.clinicData = [];
  }

  ngOnInit() {
    this.getAllClinics()

  }

  ngOnChanges() {

  }

  getAllClinics() {
    let obvserver = {
      next: (data: APIResponseVM) => {
        this.clinicData = data.Data;
        this.dataSource = new MatTableDataSource<IClinic>(this.clinicData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      complete: () => {
        console.log("completed")
      },
      error: (error: Error) => {
        console.log(error);
      }
    }

    this.http.getAllItem("clinics").subscribe(obvserver);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }
    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const propertyA = a.locaion[sort.active];
      const propertyB = b.locaion[sort.active];
      return compare(propertyA, propertyB, isAsc);
    });
  }
}



function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

