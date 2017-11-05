import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from './user.service';
import { NounService } from './noun.service';
import { UserInputComponent }   from './user-input.component';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { NounComponent }     from './noun.component';
import { MessageComponent }     from './message.component';
import { SocketService } from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserComponent,
    DashboardComponent,
    UserInputComponent,
    NounComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],
  providers: [NounService, UserService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
