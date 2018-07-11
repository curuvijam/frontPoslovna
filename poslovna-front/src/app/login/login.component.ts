import { Component, OnInit } from '@angular/core';
import { ToggleLoginService } from '../services/toggle-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  error: string;

  constructor(
    private toggleLoginService: ToggleLoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.model.username === 'marko' && this.model.password === 'admin') {
      localStorage.setItem('ulogovan', 'jeste');
      this.toggleLoginService.toggle();
      this.router.navigate(['']);
    } else {
      this.error = 'Neispravni podaci';
    }
  }

}
