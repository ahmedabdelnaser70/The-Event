import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { NgToastService } from 'ng-angular-popup';
//import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Services/auth.service';
import { UserStoreService } from '../Services/user-store.service';
import ValidateForm from '../../helpers/validationform';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResetPasswordServiceService } from '../Services/reset-password-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  public loginForm!: FormGroup; 
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  public resetPasswordEmail!:string;
  public isValidEmail !:Boolean;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    //private toast: ToastrService,
    private userStore: UserStoreService,
    private resetpass:ResetPasswordServiceService
  
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
         // this.toast.success("succes");
          this.router.navigate(['/home'])
        },
        error: (err) => {
          // this.toast.error('error', 'somthing error', {
          //   timeOut: 3000,
          // });
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
  checkValidEmail(event:string){
    const value = event;
    const pattern =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.isValidEmail=pattern.test(value);
   return this.isValidEmail;
  }

  confirmToSend(){
    if(this.checkValidEmail(this.resetPasswordEmail)){
      console.log(this.resetPasswordEmail);
    
      this.resetpass.sendResetPasswordLink(this.resetPasswordEmail).
      subscribe({
        next:(res=>{
         // this.toast.success("success");
          this.resetPasswordEmail="";
          const buttonRef = document.getElementById("closebtn");
          buttonRef?.click();

        }),
        error:(err)=>{
          // this.toast.error('error', 'somthing error', {
          //   timeOut: 3000,
          // });
          console.log(err);
        }
      })
    }
  }
}