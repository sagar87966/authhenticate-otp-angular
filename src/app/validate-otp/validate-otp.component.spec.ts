import { TestBed } from '@angular/core/testing';
import { ValidateOtpComponent } from './validate-otp.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material.module';
import { SharedService } from '../utils/shared.service';

describe('ValidateOtpComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, DemoMaterialModule],
      declarations: [ValidateOtpComponent],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ValidateOtpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
