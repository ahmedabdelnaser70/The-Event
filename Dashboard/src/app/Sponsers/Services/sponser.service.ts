import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SponserModel } from '../Model/sponser-model';

@Injectable({
  providedIn: 'root',
})
export class SponserService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/Sponsor/';

  //Get all Sponsers
  getAll() {
    return this.http.get<SponserModel[]>(this.baseurl);
  }

  // Get Sponser by id
  getById(id: number) {
    return this.http.get<SponserModel>(this.baseurl + id);
  }

  // Add new Sponser
  addSponser(Sponser: SponserModel) {
    return this.http.post<SponserModel>(this.baseurl, Sponser);
  }

  // update Sponser data by id
  updateSponser(id: number, Sponser: SponserModel) {
    return this.http.patch<SponserModel>(this.baseurl + id, Sponser);
  }

  // Delete Sponser data by id
  deleteSponser(id: number) {
    return this.http.delete<SponserModel>(this.baseurl + id);
  }
}
