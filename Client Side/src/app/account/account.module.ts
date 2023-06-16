import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
   LoginComponent, 
   RegisterComponent 
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
=======
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
>>>>>>> zeinabElazab
  ]
})
export class AccountModule { }
