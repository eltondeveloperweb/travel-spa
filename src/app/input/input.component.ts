import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'travel-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() input: any;
  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.input = this.model;

    if(this.input === undefined){
      throw new Error("Esse componente precisa ser usado com uma diretiva NgModel.");      
    }

  }

  hasSuccess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
