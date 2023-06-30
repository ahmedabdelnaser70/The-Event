import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { EventsComponent } from './Events/events.component';
import { SpeakersComponent } from './Speakers/speakers.component';
<<<<<<< HEAD
import { UsersComponent } from './users/users/users.component';
=======
import { SponsersComponent } from './Sponsers/sponsers.component';
import { NotFoundComponent } from './NotFound/not-found.component';
>>>>>>> 1197081383acc139af870b9b317fa458eacc435f


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'speakers', component: SpeakersComponent },
<<<<<<< HEAD
 // { path: 'sponsers', component:  SponserComponent},
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
   { path: 'users', component:UsersComponent},
=======
  { path: 'sponsers', component: SponsersComponent },
>>>>>>> 1197081383acc139af870b9b317fa458eacc435f
  // { path: 'tickets', component:  },
  // { path: 'hotels', component:  },
  // { path: 'gallary', component:  },
  // { path: 'eventvenue', component:  },
<<<<<<< HEAD
  { path: '', redirectTo: 'account/login', pathMatch: 'full' },
  // {path: "**", component: DNotFoundComponent},
=======

  { path: '**', component: NotFoundComponent },
>>>>>>> 1197081383acc139af870b9b317fa458eacc435f
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
