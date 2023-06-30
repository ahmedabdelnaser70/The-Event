import { Component, Input } from '@angular/core';
import { SponserService } from '../../Services/sponser.service';
import { SponserModel } from '../../Model/sponser-model';

@Component({
  selector: 'app-sponser-details',
  templateUrl: './sponser-details.component.html',
  styleUrls: ['./sponser-details.component.scss'],
})
export class SponserDetailsComponent {
  constructor(private sponserService: SponserService) {}

  @Input() id: number = 0;
  sponser?: SponserModel;

  ngOnChanges() {
    this.sponserService.getById(this.id).subscribe((data) => {
      this.sponser = data;
    });
  }
}
