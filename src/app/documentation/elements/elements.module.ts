import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { InstallationComponent } from './installation/installation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ElementsHomeComponent,
    InstallationComponent
  ],
  exports: [
    ElementsHomeComponent,
    InstallationComponent
  ]
})
export class ElementsModule { }
