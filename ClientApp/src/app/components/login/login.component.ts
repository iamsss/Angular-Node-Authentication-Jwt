import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password : ''
  };
  constructor(private authServiceService: AuthServiceService,
     private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Sending User', this.user);
    this.authServiceService.login(this.user).then((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    }).catch(e => {
      console.log('Error ', e);
    });
  }
}
