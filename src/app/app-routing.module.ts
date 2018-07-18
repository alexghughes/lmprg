import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { NounComponent }  from './noun.component';
import { NojqueryComponent } from './nojquery.component';
import { RegisterComponent } from './register.component';
const routes: Routes = [
  { path: '', redirectTo: '/nojquery', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'nouns',     component: NounComponent },
  { path: 'nojquery', component: NojqueryComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
