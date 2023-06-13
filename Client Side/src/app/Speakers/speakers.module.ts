import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { SpeakersDetailsComponent } from './Components/speakers-details/speakers-details.component';

@NgModule({
  declarations: [SpeakersComponent, SpeakersDetailsComponent],
  imports: [CommonModule],
})
export class SpeakersModule {}
