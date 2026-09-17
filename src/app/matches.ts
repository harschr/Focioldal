import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})

//ez a Service

export class Matches {
  private http: HttpClient;

  constructor(client: HttpClient) {
    this.http = client;
  }

  getMatches() {
    return this.http.get<Match[]>("http://localhost:3000/api/matches");
  }
}