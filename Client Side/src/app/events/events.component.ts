import { Component } from '@angular/core';
import { EventService } from './Services/event.service';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from './Model/event-model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  constructor(
    private eventService: EventService,
    activatedRoute: ActivatedRoute
  ) {}

  event!: EventModel[];

  ngOnInit() {
    this.eventService.getAll().subscribe((data) => {
      console.log(data);
      this.event = data;
    });
  }
}
