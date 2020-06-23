import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../model/travel';

@Component({
  selector: 'travel-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  @Input() travel:any;

  constructor() { }

  ngOnInit(): void {
  }

}
