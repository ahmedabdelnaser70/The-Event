import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { EventsComponent } from './events.component';

import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventScheduleComponent } from './Components/event-schedule/event-schedule.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventTicketComponent } from './Components/event-ticket/event-ticket.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventDetailsComponent,
    EventScheduleComponent,
    EventTicketComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, EventsRoutingModule,MatDialogModule],
  providers:[ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class EventsModule {}
