import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events.component';

import { CardDetailsComponent } from './Components/card-details/card-details.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventScheduleComponent } from './Components/event-schedule/event-schedule.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsComponent,
    CardDetailsComponent,
    EventDetailsComponent,
    EventScheduleComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, EventsRoutingModule],
})
export class EventsModule {}
