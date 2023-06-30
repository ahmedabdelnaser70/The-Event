import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ResetPassword } from '../Models/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordServiceService implements OnInit {
  private baseUrl: string = 'https://localhost:7106/api/User';
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendResetPasswordLink(email:string){
    return this.http.post<any>(`${this.baseUrl}/send-reset-email/${email}`,{})
  }

  resetPassword(resetpassobj:ResetPassword){
    return this.http.post<any>(`${this.baseUrl}/reset-password`,resetpassobj)
  }
}
