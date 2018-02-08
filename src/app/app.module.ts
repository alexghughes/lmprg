import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { NounService } from './noun.service';
import { RulesService } from './rules.service';
import { UserInputComponent }   from './user-input.component';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { NounComponent }     from './noun.component';
import { SocketService } from './socket.service';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';
import { DialogComponent } from './dialog.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    DashboardComponent,
    UserInputComponent,
    NounComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
     SimpleNotificationsModule.forRoot(),
    AngularMaterialModule,

  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [NounService, RulesService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
