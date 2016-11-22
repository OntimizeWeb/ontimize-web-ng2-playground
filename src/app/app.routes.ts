import { Routes, RouterModule } from '@angular/router';

import { AppRoutes } from './+main/main.routes';


// All routes of the application
const routes: Routes = [
  ...AppRoutes,
  { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];

let opt = {
  enableTracing: false // true if you want to print navigation routes
};
export const routing = RouterModule.forRoot(routes, opt);

