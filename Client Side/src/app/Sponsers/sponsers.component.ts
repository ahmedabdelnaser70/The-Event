import { Component } from '@angular/core';
import { SponserService } from './Services/sponser.service';
import { SponserModel } from './Model/sponser-model';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss'],
})
export class SponsersComponent {
  constructor(private sponserService: SponserService) {}
  sponsers!: SponserModel[];

  ngOnInit() {
    this.sponserService.getAll().subscribe((data) => {
      console.log(data);
      this.sponsers = data;
    });
  }
}
