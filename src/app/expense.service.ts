import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  private baseurl='';
  getExpenses(): Observable<any>{
    return this.http.get(`${this.baseurl}`);

  }

  addExpense(expense:any): Observable<any>{
    return this.http.post(`${this.baseurl}`,expense);
  }

  updateExpense(id:number,expense:any):Observable<any>{
    return this.http.put(`${this.baseurl}/${id}`,expense)
  }

  deleteExpense(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`);
  }
}
