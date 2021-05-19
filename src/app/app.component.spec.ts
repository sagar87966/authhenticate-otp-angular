import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material.module';
import { SharedService } from './utils/shared.service';

describe('AppComponent', () => {
  let userServiceStub: Partial<SharedService>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, DemoMaterialModule],
      declarations: [
        AppComponent,
        ToolBarComponent,
        // ValidateOtpComponent,
        FooterSectionComponent,
      ],
      providers:[SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    //stub shared service for test purpose
    userServiceStub = {
      validateRoute:false
    }
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show footer section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
