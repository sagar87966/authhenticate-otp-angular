import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  validateRoute: boolean = false; 
  constructor() {}
}
