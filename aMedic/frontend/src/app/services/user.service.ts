import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users/me';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
