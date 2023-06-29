import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Events/events.component';
import { SpeakersComponent } from './Speakers/speakers.component';
import { SponserComponent } from './sponsers/sponser/sponser.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'sponsers', component:  SponserComponent},
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  // { path: 'tickets', component:  },
  // { path: 'hotels', component:  },
  // { path: 'gallary', component:  },
  // { path: 'eventvenue', component:  },

  // {path: "**", component: DNotFoundComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
