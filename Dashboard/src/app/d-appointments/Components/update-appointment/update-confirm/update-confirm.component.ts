import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApppointmentService } from 'src/app/d-appointments/Services/appointment.service';
import { APIService } from 'src/app/Shared/Services/api.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './update-confirm.component.html',
  styleUrls: ['./update-confirm.component.scss']
})
export class UpdateConfirmComponent {
  constructor(private appointmentService:ApppointmentService, private sharedService:APIService, private snackBar:MatSnackBar){}
  confirm(){
    console.log(this.appointmentService.appoinForm.value);
    this.sharedService.updateItem(`appointments/${this.appointmentService.updatedId}`,this.appointmentService.appoinForm.value).subscribe(data=>{
      this.appointmentService.dialog.closeAll();
      this.snackBar.open(`Appointment has been updated successfully!`, 'ok', {
        duration: 3000,
        verticalPosition: 'top'
      });
    },err=>{
      console.log("failed");
    })

  }
}
