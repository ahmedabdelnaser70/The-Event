import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { GalleryModule } from './Gallery/gallery.module';
import { HomeModule } from './Home/home.module';
import { HotelsModule } from './Hotels/hotels.module';
import { SpeakersModule } from './Speakers/speakers.module';
import { SponsersModule } from './Sponsers/sponsers.module';
import { VenueModule } from './Venue/venue.module';
import { TicketsModule } from './Tickets/tickets.module';
import { NotFoundComponent } from './Not Found/not-found.component';


@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    EventsModule,
    GalleryModule,
    HomeModule,
    HotelsModule,
    SpeakersModule,
    SponsersModule,
    VenueModule,
    TicketsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
