import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dopamine-enhancer-1';
  loadedFeature = 'home'
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
