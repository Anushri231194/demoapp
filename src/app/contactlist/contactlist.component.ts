import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html'
})
export class ContactlistComponent implements OnInit {
  contacts: any;

  constructor(private contactservice:ContactService) { 
    this.contactlist()
  }

  ngOnInit() {
  }

  contactlist(){
    this.contacts=this.contactservice.contact;
  }

}
