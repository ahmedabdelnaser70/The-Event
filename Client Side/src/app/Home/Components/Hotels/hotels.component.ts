import { Component } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
import { HotelModel } from '../../Model/hotel-model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent {
  constructor(private hotelService: HotelService) {}

  hotels!: HotelModel[];

  ngOnInit() {
    this.hotelService.getAll().subscribe((data) => {
      console.log(data);
      this.hotels = data;
    });
  }
}
