import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {}

}
