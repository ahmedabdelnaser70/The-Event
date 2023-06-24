import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss'],
})
export class PostLoginComponent {
  adminForm!: FormGroup;
  helper = new JwtHelperService();
  constructor(
    // private service: APIService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.adminForm = fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')],
      ],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.adminForm.get('email');
  }
  get password() {
    return this.adminForm.get('password');
  }

  login() {
    // this.service.addItem("login", this.adminForm.value).subscribe((_token: any) => {
    //   let decodedToken = this.helper.decodeToken(_token.token);
    //   if (decodedToken.role == "admin") {
    //     //---put token in localstorage---//
    //     localStorage.setItem('TOKEN', _token.token);
    //     this.router.navigateByUrl('/clinics');
    //   }
    //   else
    //   {
    //     alert("Not an admin");
    //   }
    // }, () => {
    //   alert("Wrong Email or Password");
    // })
  }
}