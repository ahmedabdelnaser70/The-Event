import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApppointmentService } from 'src/app/d-appointments/Services/appointment.service';
import { APIService } from 'src/app/Shared/Services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  clinicsLocations: any;
  doctorNames: any;
  constructor(private sharedService: APIService, private fb: FormBuilder, public appointmentService: ApppointmentService) {
    this.appointmentService.appoinForm = fb.group({
      doctor: '',
      clinic: '',
      date: '',
      timeFrom: '',
      timeTo: ''
    })
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
}
