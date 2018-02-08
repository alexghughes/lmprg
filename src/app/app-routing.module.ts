import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';

import { UserInputComponent }  from './user-input.component';
import { NounComponent }  from './noun.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'input',     component: UserInputComponent },
  { path: 'nouns',     component: NounComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
