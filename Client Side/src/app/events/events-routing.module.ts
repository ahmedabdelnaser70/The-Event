import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventTicketComponent } from './Components/event-ticket/event-ticket.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'ticket/:id', component: EventTicketComponent },
  { path: 'details/:id', component: EventDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
