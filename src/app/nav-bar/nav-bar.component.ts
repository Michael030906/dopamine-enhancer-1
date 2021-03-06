import { Component, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
