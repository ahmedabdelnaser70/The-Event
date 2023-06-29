import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeakerModel } from '../Model/speaker-model';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/Speaker/';

  //Get all speakers
  getAll() {
    return this.http.get<SpeakerModel[]>(this.baseurl);
  }

  // Get speaker by id
  getById(id: number) {
    return this.http.get<SpeakerModel>(this.baseurl + id);
  }

  // Add new Patients
  addSpeaker(speaker: SpeakerModel) {
    return this.http.post<SpeakerModel>(this.baseurl, speaker);
  }

  // update speaker data by id
  updateSpeaker(id: number, speaker: SpeakerModel) {
    return this.http.patch<SpeakerModel>(this.baseurl + id, speaker);
  }

  // Delete speaker data by id
  deleteSpeaker(id: number) {
    return this.http.delete<SpeakerModel>(this.baseurl + id);
  }
}
