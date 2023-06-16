import { Component } from '@angular/core';
import { EventService } from '../../Services/event.service';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from '../../Model/event-model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  event!: EventModel;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.eventService.getById(id).subscribe((data) => {
      console.log(data);

      this.event = data;
    });
  }
}
