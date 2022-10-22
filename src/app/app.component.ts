import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-App';
  loadedFeature ='home_page';
  OnNavigate (feature: string){
    this.loadedFeature = feature;
  }
}

