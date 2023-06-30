import { Component, Input } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
import { HotelModel } from '../../Model/hotel-model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent {
  constructor(private hotelService: HotelService) {}

  @Input() id: number = 0;
  speaker?: HotelModel;

  ngOnChanges() {
    this.hotelService.getById(this.id).subscribe((data) => {
      this.speaker = data;
    });
  }
}
