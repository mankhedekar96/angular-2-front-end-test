import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url = AppSettings.URL;
  }

  get(suburl:any){

    return this.http.get(this.url+suburl);
  }
}
