import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(){
    return ["James","Jeremy","Janice","Oswaldo","Sophia","Ethol"];
  }
}
