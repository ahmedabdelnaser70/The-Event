import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SponserService } from '../../Services/sponser.service';
import { SponserModel } from '../../Model/sponser-model';

@Component({
  selector: 'app-sponsers-details',
  templateUrl: './sponsers-details.component.html',
  styleUrls: ['./sponsers-details.component.scss'],
})
export class SponsersDetailsComponent {
  constructor(
    private sponserService: SponserService,
    private activatedRoute: ActivatedRoute
  ) {}

  sponser!: SponserModel;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.sponserService.getById(id).subscribe((data) => {
      console.log(data);

      this.sponser = data;
    });
  }
}
