import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'travel-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent implements OnInit {

  @Output() newTravel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(value:any){
    //console.log(value);    
    this.newTravel.emit(value)   
  }

}
