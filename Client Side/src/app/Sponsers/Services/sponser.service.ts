import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SponserModel } from '../Model/sponser-model';

@Injectable({
  providedIn: 'root',
})
export class SponserService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/Sponsor/';

  //Get all events
  getAll() {
    return this.http.get<SponserModel[]>(this.baseurl);
  }

  // Get Event by id
  getById(id: number) {
    return this.http.get<SponserModel>(this.baseurl + id);
  }
}
