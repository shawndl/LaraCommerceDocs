/**
 * Created by shawnlegge on 20/8/17.
 */

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomePageRoutes } from './home/home.routes';
import { DocumentationPageRoutes } from './documentation/documentation.routes';

export const routing: Routes = [
  ...HomePageRoutes,
  ...DocumentationPageRoutes,

  { path: '**', component: HomeComponent, pathMatch: 'full'}
];
