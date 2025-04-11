import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseAuthUrl: String;
  constructor(private http: HttpClient) {
    this.baseAuthUrl = environment.serverHost + "/auth";
  }

  login(user: any) {
    return this.http.post(this.baseAuthUrl + '/login', user);
  }
}
