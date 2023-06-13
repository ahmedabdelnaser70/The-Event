import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VenueComponent } from './Components/Venue/venue.component';
import { HotelsComponent } from './Components/Hotels/hotels.component';

@NgModule({
  declarations: [HomeComponent, VenueComponent, HotelsComponent],
  imports: [CommonModule],
})
export class HomeModule {}
