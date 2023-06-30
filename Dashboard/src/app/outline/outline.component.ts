import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from '../account/Services/api.service';
import { AuthService } from '../account/Services/auth.service';
import { UserStoreService } from '../account/Services/user-store.service';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private api : ApiService,
    private auth: AuthService, 
    private userStore: UserStoreService) {}

    logout(){
      this.auth.signOut();
    }
}
