import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { GalleryModule } from './Gallery/gallery.module';
import { HomeModule } from './Home/home.module';
import { SpeakersModule } from './Speakers/speakers.module';
import { SponsersModule } from './Sponsers/sponsers.module';

import { NotFoundComponent } from './Not Found/not-found.component';
import { ShopingCartModule } from './shoping-cart/shopping-cart.module';

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
    SpeakersModule,
    SponsersModule,
    ShopingCartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
