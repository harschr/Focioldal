import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlTable } from './pl-table';


@Injectable({
  providedIn: 'root'
})

//ez a Service

export class PlTableService {
    private http: HttpClient;

    constructor(client: HttpClient) {
    this.http = client;
  }

  getPlTable(){
      return this.http.get<PlTable[]>('http://localhost:3000/api/plTable');
    // ("https://manutd-api.onrender.com/api/plTable"); // renderes api
  }
}
