import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }
  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>('http://localhost:8080/bank');
  }
  addBank(BankData: Bank): Observable<any> {
    return this.http.post<any>('http://localhost:8080/bank', BankData);
  }
  deleteBank(code: Number): Observable<any> {
    return this.http.delete(`http://localhost:8080/bank/${code}`);
  }
  getBankById(id: any): Observable<Bank> {
    return this.http.get<Bank>(`http://localhost:8080/bank/${id}`);
  }
  updateBank(code: number, bankData: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/bank/${code}`, bankData);
  }
}
