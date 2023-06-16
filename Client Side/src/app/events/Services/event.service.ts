import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../Model/event-model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/event/';

  //Get all events
  getAll() {
    return this.http.get<EventModel[]>(this.baseurl);
  }

  // Get Event by id
  getById(id: number) {
    return this.http.get<EventModel>(this.baseurl + id);
  }
}
