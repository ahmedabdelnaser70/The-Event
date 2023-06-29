import { Component, Input } from '@angular/core';
import { EventService } from '../../Services/event.service';
import { EventModel } from '../../Model/event-model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  constructor(private eventService: EventService) {}

  @Input() id: number = 0;
  event?: EventModel;

  ngOnChanges() {
    this.eventService.getById(this.id).subscribe((data) => {
      this.event = data;
    });
  }
}
