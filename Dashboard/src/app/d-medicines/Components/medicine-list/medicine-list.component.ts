import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Shared/Services/api.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit{
  constructor(private service:APIService){}
  ngOnInit(): void {
    this.service.getAllItem("medicines").subscribe(data=>{
      console.log(data);
    })
  }
}
