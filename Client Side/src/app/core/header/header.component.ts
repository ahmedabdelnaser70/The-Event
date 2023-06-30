import { Component } from '@angular/core';
import { ApiService } from 'src/app/account/Services/api.service';
import { AuthService } from 'src/app/account/Services/auth.service';
import { UserStoreService } from 'src/app/account/Services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private api : ApiService, public auth: AuthService, private userStore: UserStoreService) { }
  logout(){
    this.auth.signOut();
  }
  
  logincheck(){
    this.auth.isLoggedIn();
    console.log(this.auth.isLoggedIn)
  }
  
}
