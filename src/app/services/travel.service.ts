import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../model/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  urlApi:string = "http://localhost:3000/travels";

  constructor(private _http: HttpClient) { }

  getTravelsService():Observable<Travel[]>{
    return this._http.get<Travel[]>(this.urlApi).pipe(
      response => response
    )
  }

  addTravelService(params){

    let data = {
      title: params 
    }
    
    return this._http.post(`${this.urlApi}`, data).pipe(
      response => response
    )
  }
}
