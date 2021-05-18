import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../utils/shared.service';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  languages: Language[] = [
    { value: 'eng', viewValue: 'English' },
    { value: 'spa', viewValue: 'Spanish' },
    { value: 'ger', viewValue: 'German' },
  ];

  selectedLanguage: string = 'eng';

  constructor(public sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigateByUrl('/login');
    localStorage.setItem('validateRoute', '0');
    this.sharedService.validateRoute = false;
  }
}
