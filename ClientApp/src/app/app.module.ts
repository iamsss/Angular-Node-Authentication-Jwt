import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialComponent } from './components/special/special.component';


// importing Routes
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
