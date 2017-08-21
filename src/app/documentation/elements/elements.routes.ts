import { Route } from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { InstallationComponent } from './installation/installation.component';

export const  ElementsPageRoutes: Route[] = [
  {
    path: '',
    component: ElementsHomeComponent,
  },
  {
    path: 'installation',
    component: InstallationComponent,
  }
];
