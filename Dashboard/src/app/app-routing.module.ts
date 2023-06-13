import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAppointmentComponent } from './d-appointments/Components/list-appointment/list-appointment.component';
import { ClinicsListComponent } from './d-clinics/Components/clinics-list/clinics-list.component';
import { DDoctorsComponent } from './d-doctors/d-doctors.component';
import { DEmployeesComponent } from './d-employees/d-employees.component';
import { DInvoicesComponent } from './d-invoices/d-invoices.component';
import { DMedicinesComponent } from './d-medicines/d-medicines.component';
import { DNotFoundComponent } from './D-NotFound/D-NotFound.component';
import { DPatientsComponent } from './d-patients/d-patients.component';
import { DPrescriptionsComponent } from './d-prescriptions/d-prescriptions.component';
import { DReportsComponent } from './d-reports/d-reports.component';
import { DSpecailtiesComponent } from './d-specailties/d-specailties.component';
import { PostLoginComponent } from './login/post-login/post-login.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "clinics", component: ClinicsListComponent },
  { path: "doctors", component: DDoctorsComponent },
  { path: "patients", component: DPatientsComponent },
  { path: "employees", component: DEmployeesComponent },
  { path: "medicines", component: DMedicinesComponent },
  { path: "specailties", component: DSpecailtiesComponent },
  { path: "prescriptions", component: DPrescriptionsComponent },
  {
    path: "appointments", component: ListAppointmentComponent
  },
  { path: "invoices", component: DInvoicesComponent },
  { path: "reports", component: DReportsComponent },
  { path: "login", component: PostLoginComponent },
    {path: "**", component: DNotFoundComponent},
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
