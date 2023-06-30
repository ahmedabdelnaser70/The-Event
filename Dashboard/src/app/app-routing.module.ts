import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { EventsComponent } from './Events/events.component';
import { SpeakersComponent } from './Speakers/speakers.component';
import { UsersComponent } from './users/users/users.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'speakers', component: SpeakersComponent },
 // { path: 'sponsers', component:  SponserComponent},
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
   { path: 'users', component:UsersComponent},
  // { path: 'tickets', component:  },
  // { path: 'hotels', component:  },
  // { path: 'gallary', component:  },
  // { path: 'eventvenue', component:  },
  { path: '', redirectTo: 'account/login', pathMatch: 'full' },
  // {path: "**", component: DNotFoundComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
