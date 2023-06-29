import { Component } from '@angular/core';
import { SpeakerService } from './Services/speaker.service';
import { SpeakerModel } from './Model/speaker-model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent {
  constructor(private speakerService: SpeakerService) {}

  speakers!: SpeakerModel[];

  ngOnInit() {
    this.speakerService.getAll().subscribe((data) => {
      console.log(data);
      this.speakers = data;
    });
  }
}
