import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SponsersModule } from '../sponsers.module';
import { SponserModel } from '../Model/speaker-model';


@Injectable({
  providedIn: 'root',
})
export class SponserService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/Sponser/';

  //Get all speakers
  getAll() {
    return this.http.get<SponserModel[]>(this.baseurl);
  }

  // Get speaker by id
  getById(id: number) {
    return this.http.get<SponserModel>(this.baseurl + id);
  }

  // Add new Patients
  addSpeaker(sponser: SponserModel) {
    return this.http.post<SponserModel>(this.baseurl, sponser);
  }

  // update speaker data by id
  updateSpeaker(id: number, sponser: SponserModel) {
    return this.http.patch<SponserModel>(this.baseurl + id, sponser);
  }

  // Delete speaker data by id
  deleteSpeaker(id: number) {
    return this.http.delete<SponserModel>(this.baseurl + id);
  }
}
