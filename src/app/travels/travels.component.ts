import { Component, OnInit, Output, Input } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import { TravelService } from '../services/travel.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Travel } from '../model/travel';

@Component({
  selector: 'travel-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  
  @Output() travels:Observable<Travel[]>;

  constructor(private _serviceTravel: TravelService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getTravels();    
  }  

  getTravels(){
    this.travels = this._serviceTravel.getTravelsService();
  }

  addTravel(value){    
    this._serviceTravel.addTravelService(value).subscribe(
      res => { 
        this._router.navigate(['/list-of-travels'])
       },
      error => {
        console.log(error);
        
      }      
    )
  }

}
