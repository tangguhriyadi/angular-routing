import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:any="http://api.sunhouse.co.id/bookstore/index.php/"
  constructor(
    public http:HttpClient
  ) { }

  get(url:any){
    return this.http.get(this.serverUrl + url)
  }
  post(url: any, data:any){
    return this.http.post(this.serverUrl + url, data)
  }
}
