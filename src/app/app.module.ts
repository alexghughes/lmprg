import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { JwtInterceptorProvider } from './_helpers/jwt.interceptor';
import { ErrorInterceptorProvider } from './_helpers/error.interceptor';

import { GrowerComponent } from './grower.component';

import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NounComponent,
    NojqueryComponent,
    FaderComponent,
    GrowerComponent,
    RegisterComponent,
    LoginComponent

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
  providers: [
    NounService,
    RulesService,
    SocketService,
    AuthGuard,
    UserService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
