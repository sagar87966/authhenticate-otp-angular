import { Component, ViewEncapsulation  } from '@angular/core';
import { SharedService } from "./utils/shared.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'authenticate-otp';
  constructor(public sharedService:SharedService){

  }
}
