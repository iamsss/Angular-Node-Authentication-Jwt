import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authServiceService.login(this.user).catch(e => {
      console.log('Error ', e);
    });
  }
}
