import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"reset",component:ResetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
