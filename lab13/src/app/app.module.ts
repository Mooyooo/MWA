import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { ProfileComponent } from './profile.component';
import { MyGuard } from './my.guard';
import { ErrorComponent } from './error/error.component';


const MY_ROUTES: Routes = [
  { path: 'homepage', component: HomeComponent },
  {
    path: 'student', component: StudentComponent,
    children: [{ path: 'profile/:id', component: ProfileComponent, canActivate:[MyGuard] }]
  },
  {path:'error',component:ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [StudentService,MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
