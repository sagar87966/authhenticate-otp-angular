import { TestBed } from '@angular/core/testing';
import { DemoMaterialModule } from '../material.module';
import { FooterSectionComponent } from './footer-section.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FooterSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoMaterialModule],
      declarations: [FooterSectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FooterSectionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as footer text as 'November First A/S • Danish FSA FT 22017'`, () => {
    const fixture = TestBed.createComponent(FooterSectionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain(
      'November First A/S • Danish FSA FT 22017'
    );
  });
});
