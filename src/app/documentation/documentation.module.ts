import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationComponent } from './documentation.component';
import { DocumentationHomeComponent } from './documentation-home/documentation-home.component';
import {ElementsModule} from './elements/elements.module';
import {SideMenuComponent} from './side-menu/side-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ElementsModule
  ],
  declarations: [
    DocumentationComponent,
    DocumentationHomeComponent,
    SideMenuComponent,
  ],
  exports: [
    DocumentationComponent
  ]
})
export class DocumentationModule { }
