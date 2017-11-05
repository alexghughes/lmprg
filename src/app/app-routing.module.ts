import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { UserComponent }      from './user.component';
import { UserProfileComponent }  from './user-profile.component';
import { UserInputComponent }  from './user-input.component';
import { NounComponent }  from './noun.component';
import { MessageComponent }  from './message.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'profile/:id', component: UserProfileComponent },
  { path: 'users',     component: UserComponent },
  { path: 'input',     component: UserInputComponent },
  { path: 'nouns',     component: NounComponent },
  { path: 'message',     component: MessageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
