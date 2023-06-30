import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketService } from '../../Service/ticket.service';
import{Inject} from '@angular/core'
@Component({
  selector: 'app-posted-event-ticket',
  templateUrl: './posted-event-ticket.component.html',
  styleUrls: ['./posted-event-ticket.component.scss']
})
export class PostedEventTicketComponent {
  
  constructor(
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<PostedEventTicketComponent>,
    public ticketService: TicketService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    this.ticketForm = this.fb.group({
      TicketType: ['', Validators.required],
      TicketPrice: ['', Validators.required],
      TicketQuantity: ['', Validators.required],
      Event:['',Validators.required]
  }
    )
  }
  ticketForm:FormGroup
  ngOnInit(): void {
    this.ticketForm.patchValue(this.data);
    console.log(this.data);
  }
  onFormSubmit()
  {
    
  }
}
