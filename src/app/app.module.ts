import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

// directive
import { RestrictPasteDirective } from "./custom-directives/restrict-paste.directive";

import { ReactiveFormsModule } from '@angular/forms';

//material component
import { DemoMaterialModule } from "./material.module";

//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

//app routing
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ValidateOtpComponent,
    ToolBarComponent,
    FooterSectionComponent,
    RestrictPasteDirective,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
