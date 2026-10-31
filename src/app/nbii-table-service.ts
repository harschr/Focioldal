import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NBIITable } from './nbii-table';


@Injectable({
  providedIn: 'root'
})

//ez a Service

export class NBIITableService {
    private http: HttpClient;

    constructor(client: HttpClient) {
    this.http = client;
  }

  getNBIITable(){
     // return this.http.get<NBIITable[]>('http://localhost:3000/api/nbiiTable'); //saját gépes szerver api
    return this.http.get<NBIITable[]>("https://manutd-api.onrender.com/api/nbiiTable"); // renderes api
  }
}
