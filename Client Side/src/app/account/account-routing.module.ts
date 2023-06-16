import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD


const routes: Routes =
[
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

>>>>>>> zeinabElazab
export class AccountRoutingModule { }
