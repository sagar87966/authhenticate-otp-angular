import { TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material.module';
import { SharedService } from '../utils/shared.service';

describe('DashboardPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, DemoMaterialModule],
      declarations: [
        DashboardPageComponent,
        // ValidateOtpComponent,
      ],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
