import { AuthGuard } from './gaurds/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialComponent } from './components/special/special.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './components/home/home.component';


// importing Routes
const appRoutes: Routes = [
  {path: '/', component: HomeComponent },
  {path: 'login', component: LoginComponent },

  {path: 'special', component: SpecialComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpecialComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthServiceService, AuthGuard,
  {
     provide: HTTP_INTERCEPTORS,
     useClass:  TokenInterceptorService,
     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
