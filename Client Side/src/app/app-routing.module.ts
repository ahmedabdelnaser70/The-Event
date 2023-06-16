import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { EventsComponent } from './events/events.component';
import { NotFoundComponent } from './Not Found/not-found.component';
import { AuthGuard } from '../app/core/guards/auth.guard'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'event',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'speaker',
    loadChildren: () =>
      import('./Speakers/speakers.module').then((m) => m.SpeakersModule),
  },
  {
    path: 'sponser',
    loadChildren: () =>
      import('./Sponsers/sponsers.module').then((m) => m.SponsersModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
