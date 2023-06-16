import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SponsersComponent } from './sponsers.component';
import { SponsersDetailsComponent } from './Components/sponsers-details/sponsers-details.component';
import { SponsersRoutingModule } from './sponsers-routing.module';

@NgModule({
  declarations: [SponsersComponent, SponsersDetailsComponent],
  imports: [CommonModule, RouterModule, FormsModule, SponsersRoutingModule],
})
export class SponsersModule {}
