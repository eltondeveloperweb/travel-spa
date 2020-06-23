import { Component, OnInit } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'travel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCountries = [];
  selectedCountryId: number;

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
