import { Component, OnInit } from '@angular/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  languages: Language[] = [
    {value: 'eng', viewValue: 'English'},
    {value: 'spa', viewValue: 'Spanish'},
    {value: 'ger', viewValue: 'German'}
  ];

  selectedLanguage:string = 'eng';
  
  constructor() { }

  ngOnInit(): void {
  }

}
