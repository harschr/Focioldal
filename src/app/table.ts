import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableRow } from './tableRow';


@Injectable({
  providedIn: 'root'
})

//ez a Service

export class Table {
    private http: HttpClient;

    constructor(client: HttpClient) {
    this.http = client;
  }

  getTable(){
     return this.http.get<TableRow[]>("https://manutd-api.onrender.com/api/plTable"); // renderes api
  }

}