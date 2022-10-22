import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { home_page } from './homepage.module';
import { HomepageService } from './homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HomepageService]
})
export class HomepageComponent implements OnInit {
  pageSelected: home_page;
  @Input() Homepage: home_page;
    constructor(private homepageServive: HomepageService, private router: Router){}
    @Output() selectFeature = new EventEmitter<string>();
    onSelect(feature: string){
        this.selectFeature.emit(feature);}

  
    ngOnInit() {
    this.homepageServive.pageSelected.subscribe((
      Homepage: home_page)=>{
     this.pageSelected = Homepage;
  });}

  onSelected(){
    this.homepageServive.pageSelected.emit(this.Homepage)
  }
 onLoadRecipe(){
  this.router.navigate(['/Recipe']);
 }
  
}