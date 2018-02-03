import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Router } from '@angular/router';
import { myRoutes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    myRoutes
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
