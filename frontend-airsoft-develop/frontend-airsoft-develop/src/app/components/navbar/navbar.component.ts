import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = null;
  categories: string[] = [];
  hoverStates: { [key: string]: boolean } = {};

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      console.log('NavbarComponent Login status:', isLoggedIn);
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.getUsername$.subscribe(username => {
      console.log('NavbarComponent Username:', username);
      this.username = username;
    });

    this.sharedService.categories$.subscribe(categories => {
      this.categories = categories;
    });
  }

  toggleHover(menu: string, isHovering: boolean): void {
    this.hoverStates[menu] = isHovering;
  }

  isHovering(menu: string): boolean {
    return this.hoverStates[menu];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/index']);
    this.forceReload();
  }
   forceReload(): void {
    // Clear local storage
    localStorage.clear();
    // Force a reload with a unique query string
    window.location.href = window.location.pathname + '?cacheBuster=' + new Date().getTime();
  }
}
