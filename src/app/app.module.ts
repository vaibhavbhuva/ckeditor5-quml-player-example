import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QumlLibraryModule } from '@project-sunbird/sunbird-quml-player';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CkeditorToolComponent } from './ckeditor-tool/ckeditor-tool.component';
@NgModule({
  declarations: [
    AppComponent,
    CkeditorToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QumlLibraryModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
