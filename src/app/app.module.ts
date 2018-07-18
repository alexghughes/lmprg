import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { NounService } from './noun.service';
import { RulesService } from './rules.service';
import { NojqueryComponent } from './nojquery.component'
import { UserInputComponent }   from './user-input.component';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { NounComponent }     from './noun.component';
import { SocketService } from './socket.service';
import { UserService } from './user.service';
import { FaderComponent } from './fader.component';

import { GrowerComponent } from './grower.component';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NounComponent,
    NojqueryComponent,
    FaderComponent,
    GrowerComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  entryComponents: [

  ],
  providers: [NounService, RulesService, SocketService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
