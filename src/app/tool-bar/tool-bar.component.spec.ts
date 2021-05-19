import { TestBed } from '@angular/core/testing';
import { ToolBarComponent } from './tool-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material.module';
import { SharedService } from '../utils/shared.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ToolBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        DemoMaterialModule,
      ],
      declarations: [ToolBarComponent],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToolBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("Navbar brand should be 'NOVEMBER FIRST'", () => {
    const fixture = TestBed.createComponent(ToolBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.toolbar-section span').textContent
    ).toContain('NOVEMBER FIRST');
  });

  // it("Language select with default value as 'English'", () => {
  //   const fixture = TestBed.createComponent(ToolBarComponent);
  //   fixture.detectChanges();
  //   const compiled:HTMLElement = fixture.nativeElement;

  // });
});
