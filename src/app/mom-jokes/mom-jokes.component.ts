import { Component, OnInit} from '@angular/core';
import { MomJokeApiService } from './mom-joke-api.service'
@Component({
  selector: 'app-mom-jokes',
  templateUrl: './mom-jokes.component.html',
  styleUrls: ['./mom-jokes.component.css']
})
export class MomJokesComponent implements OnInit {

  constructor(private apiData:MomJokeApiService){
    // this.apiData.apiData().subscribe(data=>{
    //   console.log(data)
    // })
  }

  ngOnInit(): void {
    // this.apiData.apiData()
    const res = this.apiData.apiData()
    console.log(res)

  }
}
