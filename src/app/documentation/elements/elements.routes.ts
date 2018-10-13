import { Route } from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { StripeSetupComponent } from './stripe-setup/stripe-setup.component';
import { PhpunitSetupComponent } from './phpunit-setup/phpunit-setup.component';
import { TestingDetailsComponent } from './testing-details/testing-details.component';
import { DuskSetupComponent } from './dusk-setup/dusk-setup.component';
import { AlgoliaSetupComponent } from './algolia-setup/algolia-setup.component';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';



export const  ElementsPageRoutes: Route[] = [
  {
    path: '',
    component: ElementsHomeComponent,
  },
  {
    path: 'setup-stripe',
    component: StripeSetupComponent,
  },
  {
    path: 'setup-phpunit',
    component: PhpunitSetupComponent,
  },
  {
    path: 'setup-dusk',
    component: DuskSetupComponent,
  },
  {
    path: 'setup-algolia',
    component: AlgoliaSetupComponent,
  },
  {
    path: 'setup-admin',
    component: AdminSetupComponent,
  },
  {
    path: 'testing-details',
    component: TestingDetailsComponent,
  }
];
