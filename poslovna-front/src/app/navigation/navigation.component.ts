import { Component, OnInit } from '@angular/core';
import { ToggleLoginService } from '../services/toggle-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private toggleLoginService: ToggleLoginService,
    private router: Router
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('ulogovan') === 'jeste') {
      this.isLoggedIn = true;
    }
    this.toggleLoginService.change.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout(): void {
    sessionStorage.setItem('ulogovan', 'nije');
    this.router.navigate(['login']);
    this.toggleLoginService.toggle();
  }

}
