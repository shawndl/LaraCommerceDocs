import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { routing } from './app.routes';
import { DocumentationModule } from './documentation/documentation.module';
import { FooterComponent } from './includes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routing),
    HomeModule,
    DocumentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
