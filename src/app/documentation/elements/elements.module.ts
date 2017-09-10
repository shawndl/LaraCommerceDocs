import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { InstallationComponent } from './installation/installation.component';
import {StripeSetupComponent} from './stripe-setup/stripe-setup.component';
import { PhpunitSetupComponent } from './phpunit-setup/phpunit-setup.component';
import { TestingDetailsComponent } from './testing-details/testing-details.component';
import { DuskSetupComponent } from './dusk-setup/dusk-setup.component';
import { AlgoliaSetupComponent } from './algolia-setup/algolia-setup.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ElementsHomeComponent,
    InstallationComponent,
    StripeSetupComponent,
    PhpunitSetupComponent,
    TestingDetailsComponent,
    DuskSetupComponent,
    AlgoliaSetupComponent
  ],
  exports: [
    ElementsHomeComponent,
    InstallationComponent
  ]
})
export class ElementsModule { }
