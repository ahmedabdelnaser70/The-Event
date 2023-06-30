import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from '../Model/hotel-model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(public http: HttpClient) {}
  baseurl = 'https://localhost:7106/api/Hotel/';

  //Get all Hotels
  getAll() {
    return this.http.get<HotelModel[]>(this.baseurl);
  }

  // Get Hotel by id
  getById(id: number) {
    return this.http.get<HotelModel>(this.baseurl + id);
  }

  // Add new Hotel
  addHotel(hotel: HotelModel) {
    return this.http.post<HotelModel>(this.baseurl, hotel);
  }

  // update Hotel data by id
  updateHotel(id: number, hotel: HotelModel) {
    return this.http.patch<HotelModel>(this.baseurl + id, hotel);
  }

  // Delete Hotel data by id
  deleteHotel(id: number) {
    return this.http.delete<HotelModel>(this.baseurl + id);
  }
}
