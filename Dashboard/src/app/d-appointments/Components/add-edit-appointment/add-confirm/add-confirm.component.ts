import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from 'src/app/Shared/Services/api.service';
import { ApppointmentService } from '../../../Services/appointment.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './add-confirm.component.html',
  styleUrls: ['./add-confirm.component.scss']
})
export class AddConfirmComponent {
  constructor(private appointmentService:ApppointmentService,
  private sharedService:APIService,
  private snackBar:MatSnackBar){}
  confirm(){
    console.log(this.appointmentService.appoinForm.value);
    this.sharedService.addItem("appointments", this.appointmentService.appoinForm.value).subscribe(data=>{
      this.snackBar.open(`Appointment has been added successfully!`, 'ok', {
        duration: 3000,
        verticalPosition: 'top'
      });
      this.appointmentService.dialog.closeAll();
    },err=>{
      console.log("failed");
    })

  }
}
