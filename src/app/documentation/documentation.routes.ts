import { Route } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { ElementsPageRoutes } from './elements/elements.routes';

export const  DocumentationPageRoutes: Route[] = [
  {
    path: 'documentation',
    component: DocumentationComponent,
    children: [
      ...ElementsPageRoutes
    ]
  }
];
