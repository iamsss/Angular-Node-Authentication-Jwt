import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { SpeciaService } from '../../services/specia.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  validate = false;
  constructor(private specialService: SpeciaService, private router: Router) { }

  ngOnInit() {
    this.specialService.getSpecial().subscribe(
      res => this.validate = true,
      err => {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
      });
      }

}
