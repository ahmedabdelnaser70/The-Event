import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { EventsComponent } from './Events/events.component';
import { SpeakersComponent } from './Speakers/speakers.component';
import { SponsersComponent } from './Sponsers/sponsers.component';
import { NotFoundComponent } from './NotFound/not-found.component';
import { RegisterComponent } from './account/register/register.component';
import { UsersComponent } from './Users/users/users.component';
import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'users', component:UsersComponent},
  { path: 'sponsers', component: SponsersComponent },
  {path:'register',component:RegisterComponent},
  { path: 'tickets', component:TicketComponent},

  // { path: 'hotels', component:  },
  // { path: 'gallary', component:  },
  // { path: 'eventvenue', component:  },
  // {path: "**", component: DNotFoundComponent},

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
