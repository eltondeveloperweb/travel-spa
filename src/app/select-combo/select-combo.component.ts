import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'travel-select-combo',
  templateUrl: './select-combo.component.html',
  styleUrls: ['./select-combo.component.scss']
})
export class SelectComboComponent implements OnInit {
  
  items: {};

  selectedCountries = [];
  selectedCountryId: number;

  constructor(private _serviceTravels: TravelService) { }

  ngOnInit(): void {
    this.getTravelsToCombo()
  }

  getTravelsToCombo(){
    this._serviceTravels.getTravelsService().subscribe(
      data => this.items = data
    )
  }

  onChange = ($event: any): void => {
    let title = $event.title;
    console.log($event);
    console.log(`SELECTION CHANGED INTO ${$event.title || ''}`);
  }

}
