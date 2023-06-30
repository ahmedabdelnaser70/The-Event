import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginComponent } from './login/post-login/post-login.component';
import { EventsComponent } from './Events/events.component';
import { SpeakersComponent } from './Speakers/speakers.component';
import { SponsersComponent } from './Sponsers/sponsers.component';
import { NotFoundComponent } from './NotFound/not-found.component';
import { HotelsComponent } from './Hotels/hotels.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PostLoginComponent },

  { path: 'events', component: EventsComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'sponsers', component: SponsersComponent },
  // { path: 'tickets', component:  },
  { path: 'hotels', component: HotelsComponent },
  // { path: 'gallary', component:  },
  // { path: 'eventvenue', component:  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
