import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsersComponent } from './sponsers.component';
import { SponsersDetailsComponent } from './Components/sponsers-details/sponsers-details.component';



@NgModule({
  declarations: [
    SponsersComponent,
    SponsersDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SponsersModule { }
