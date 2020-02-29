import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  
  name1:any;
  email1:any;
  mobileno1:any;
  
  // contact:any={
  //   name:'',
  //   email:'',
  //   mobileno:''
  // }

  constructor() { }

  ngOnInit() {
  }
  
  submit(f){
      console.log(f);
  }

  reset(){
    let form:any=document.getElementById('contactForm');
    form.reset();
  }
}
