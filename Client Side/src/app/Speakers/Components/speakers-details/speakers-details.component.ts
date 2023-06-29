import { Component } from '@angular/core';
import { SpeakerService } from '../../Services/speaker.service';
import { SpeakerModel } from '../../Model/speaker-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speakers-details',
  templateUrl: './speakers-details.component.html',
  styleUrls: ['./speakers-details.component.scss'],
})
export class SpeakersDetailsComponent {
  constructor(
    private speakerService: SpeakerService,
    private activatedRoute: ActivatedRoute
  ) {}

  speaker!: SpeakerModel;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.speakerService.getById(id).subscribe((data) => {
      console.log(data);

      this.speaker = data;
    });
  }
}
