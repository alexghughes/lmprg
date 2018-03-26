import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';

import { UserInputComponent }  from './user-input.component';
import { NounComponent }  from './noun.component';
import { NojqueryComponent } from './nojquery.component';
const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'input',     component: UserInputComponent },
  { path: 'nouns',     component: NounComponent },
  { path: 'nojquery', component: NojqueryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
