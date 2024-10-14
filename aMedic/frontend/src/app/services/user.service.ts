import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private apiUrl = 'http://localhost:3000/users/me';
  private apiUrl = 'https://ideal-disco-r5w6jpx6p4pc5q4r-3000.app.github.dev/users/me';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiUrl, {headers});
  }

  updateUserDetails(userData: any): Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(this.apiUrl, userData, {headers});
  }
}
