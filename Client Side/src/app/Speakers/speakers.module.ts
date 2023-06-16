import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SpeakersComponent } from './speakers.component';
import { SpeakersDetailsComponent } from './Components/speakers-details/speakers-details.component';
import { SpeakersRoutingModule } from './speakers-routing.module';

@NgModule({
  declarations: [SpeakersComponent, SpeakersDetailsComponent],
  imports: [CommonModule, RouterModule, FormsModule, SpeakersRoutingModule],
})
export class SpeakersModule {}
