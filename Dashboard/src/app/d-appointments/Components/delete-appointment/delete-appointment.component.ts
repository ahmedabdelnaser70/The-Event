import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from 'src/app/Shared/Services/api.service';
import { ApppointmentService } from '../../Services/appointment.service';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.scss']
})
export class DeleteAppointmentComponent {
  constructor(private sharedService: APIService, private snackBar: MatSnackBar, public appointmentService: ApppointmentService) { }
  confirm() {
    this.sharedService.deleteItem(`appointments/${this.appointmentService.deletedId}`).subscribe(data => {
      this.snackBar.open(`Appointment has been deleted successfully!`, 'ok', {
        duration: 3000,
        verticalPosition: 'top'
      });
    })
  }
}
