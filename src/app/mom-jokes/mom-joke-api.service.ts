import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MomJokeApiService {

  constructor(private http:HttpClient) { }

  apiData(){
    let url="https://api.yomomma.info/";
    // let url="https://yomomma-api.herokuapp.com/jokes";
    return this.http.get(url);
  }
}
