import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Shared/Services/api.service';
import { AddConfirmComponent } from './add-confirm/add-confirm.component';
import { ApppointmentService } from '../../Services/appointment.service';

@Component({
  selector: 'app-add-edit-appointment',
  templateUrl: './add-edit-appointment.component.html',
  styleUrls: ['./add-edit-appointment.component.scss']
})
export class AddEditAppointmentComponent implements OnInit {
  clinicsLocations: any;
  doctorNames: any;
  constructor(private sharedService: APIService, 
  public appointmentService: ApppointmentService) {
  }

  ngOnInit(): void {
    this.sharedService.getAllItem("clinics").subscribe(data => {
      this.clinicsLocations = data.Data;
    }, err => {
      alert("wrong")
    })

    this.sharedService.getAllItem("doctors").subscribe(data => {
      this.doctorNames = data.Data;
    })
  }

  submit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.appointmentService.appoinForm.value.date = this.appointmentService.formatCalenderDate(this.appointmentService.appoinForm.value.date);
    this.appointmentService.dialog.open(AddConfirmComponent, {width: '350px', enterAnimationDuration, exitAnimationDuration});
  }

  close(){
    this.appointmentService.dialog.closeAll()
  }
}
