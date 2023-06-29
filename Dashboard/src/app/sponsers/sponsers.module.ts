import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsersRoutingModule } from './sponsers-routing.module';
import { SponserComponent } from './sponser/sponser.component';


@NgModule({
  declarations: [
    SponserComponent
  ],
  imports: [
    CommonModule,
    SponsersRoutingModule
  ]
})
export class SponsersModule { }
