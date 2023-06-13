import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { AddMedicineComponent } from './Components/add-medicine/add-medicine.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DMedicinesComponent } from './d-medicines.component';



@NgModule({
  declarations: [
    MedicineListComponent,
    AddMedicineComponent,
    DMedicinesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    MedicineListComponent,
    AddMedicineComponent,
  ],
  bootstrap: [MedicineListComponent]
})
export class DMedicinesModule { }
