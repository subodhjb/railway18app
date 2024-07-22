import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private httpClient:HttpClient) { }
  apiUrl='https://freeapi.miniprojectideas.com/api/TrainApp/';

  getAllStations(){
    return this.httpClient.get(`${this.apiUrl}GetAllStations`);
  }
}
