import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from '../Model/hotel-model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/hotel/';

  //Get all events
  getAll() {
    return this.http.get<HotelModel[]>(this.baseurl);
  }

  // Get Event by id
  getById(id: number) {
    return this.http.get<HotelModel>(this.baseurl + id);
  }
}
