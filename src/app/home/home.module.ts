import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    FeaturesComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
