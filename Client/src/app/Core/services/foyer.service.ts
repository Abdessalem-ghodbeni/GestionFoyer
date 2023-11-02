import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environement';

@Injectable({
  providedIn: 'root',
})
export class FoyerService {
  private backendUrl = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(`${this.backendUrl}/bloc/all/blocs`);
  }
}
