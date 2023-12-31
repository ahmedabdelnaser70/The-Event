import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeakerModel } from '../Model/speaker-model';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/Speaker/';

  //Get all events
  getAll() {
    return this.http.get<SpeakerModel[]>(this.baseurl);
  }

  // Get Event by id
  getById(id: number) {
    return this.http.get<SpeakerModel>(this.baseurl + id);
  }
}
