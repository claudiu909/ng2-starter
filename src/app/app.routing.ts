import { RouterModule } from '@angular/router';
import { HomeComponent } from './home';

export const routing = RouterModule.forRoot([
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
]);