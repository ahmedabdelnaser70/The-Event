import { Component, Input } from '@angular/core';

import { SpeakerService } from '../../Services/speaker.service';
import { SpeakerModel } from '../../Model/speaker-model';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss'],
})
export class SpeakerDetailsComponent {
  constructor(private speakerService: SpeakerService) {}

  @Input() id: number = 0;
  speaker?: SpeakerModel;

  ngOnChanges() {
    this.speakerService.getById(this.id).subscribe((data) => {
      this.speaker = data;
    });
  }
}
