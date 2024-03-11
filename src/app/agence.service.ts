import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agence } from './agence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }

  getAgences(): Observable<Agence[]> {
    return this.http.get<Agence[]>('http://localhost:8080/agence');
  }
  deleteAgence(code: Number): Observable<any> {
    return this.http.delete(`http://localhost:8080/agence/${code}`);
  }
  addAgence(agenceData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/agence', agenceData);
  }
}
