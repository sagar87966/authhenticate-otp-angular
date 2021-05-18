import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './utils/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(public sharedService: SharedService, private router: Router) {}
  ngOnInit() {
    let authtoken: number | null = Number(localStorage.getItem('validateRoute'));
    if (authtoken) {
      this.sharedService.validateRoute = authtoken ? true : false;
      this.router.navigateByUrl('/dashboard');
    }
  }
}
