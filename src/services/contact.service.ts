import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contact:any=[
    {
    name:'Anushri',
    email:'anu@gmail.com',
    mobileno:'8378803183'
  },
  {
    name:'Anushri2',
    email:'anu@gmail.com',
    mobileno:'8378803183'
  },
  {
    name:'Anushri3',
    email:'anu@gmail.com',
    mobileno:'8378803183'
  },
  {
    name:'Anushri4',
    email:'anu@gmail.com',
    mobileno:'8378803183'
  }
]
}
