import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MomJokeApiService {

  constructor(private http:HttpClient) { }

  apiData(){
    //let url =  "https://cat-fact.herokuapp.com"
    // let url="https://api.yomomma.info/";
    const httpHeaders: HttpHeaders = new HttpHeaders({
      // "Access-Control-Allow-Origin":"*"
  });
    let url="http://yomomma-api.herokuapp.com/jokes";
    return this.http.get(url, {headers:{"Access-Control-Allow-Origin":"**"}});
  }
}
