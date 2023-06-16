import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SponsersComponent } from './sponsers.component';
import { SponsersDetailsComponent } from './Components/sponsers-details/sponsers-details.component';

const routes: Routes = [
  { path: '', component: SponsersComponent },
  { path: 'details/:id', component: SponsersDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsersRoutingModule {}
