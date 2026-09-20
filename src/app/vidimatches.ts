import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vidimatch } from './vidimatch';

@Injectable({
  providedIn: 'root'
})

//ez a Service

export class Vidimatches {
  private http: HttpClient;

  constructor(client: HttpClient) {
    this.http = client;
  }

  getVidimatches() {
   // return this.http.get<Match[]>("http://localhost:3000/api/matches"); //ez még a saját gépen keresi az api-t
   return this.http.get<Vidimatch[]>("https://manutd-api.onrender.com/api/vidi/matches"); // renderes api
  }
}