import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SpeakersComponent } from './speakers.component';
import { SpeakersDetailsComponent } from './Components/speakers-details/speakers-details.component';

const routes: Routes = [
  { path: '', component: SpeakersComponent },
  { path: 'details/:id', component: SpeakersDetailsComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakersRoutingModule {}
