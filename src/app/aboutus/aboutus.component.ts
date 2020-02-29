import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html'
})
export class AboutusComponent implements OnInit {
 show:Boolean=false;
 showcont:Boolean=true;
  
  constructor() { }

  ngOnInit() {

  }

  showtext(){
    this.show=true;
  }

  shownext(){
   this.showcont=false;
  }

}
