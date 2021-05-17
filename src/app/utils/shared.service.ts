import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  hideLanding:boolean=false;
  constructor() { }
}
