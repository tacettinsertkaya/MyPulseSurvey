import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 6000,
        closeButton:true,
        positionClass: 'toast-top-right',
        progressBar:true,
        easing:"ease-in",
        easeTime:300,
        enableHtml:true,
        
        progressAnimation:"decreasing",
        preventDuplicates: false,
      }
    ), // ToastrModule added,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
