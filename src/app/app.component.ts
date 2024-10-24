import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-base-100">
      <!-- Navbar -->
      <div class="navbar bg-base-200">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
              <li><a routerLink="/about" routerLinkActive="active">About</a></li>
              <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
              <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
            </ul>
          </div>
          <a routerLink="/" class="btn btn-ghost normal-case text-xl">Max Hotuik</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <label class="swap swap-rotate">
            <div class="relative inline-flex items-center p-1 rounded-full cursor-pointer hover:bg-base-300 transition-all duration-200">
              <input
                type="checkbox"
                (change)="toggleTheme($event)"
                class="hidden"
              />

              <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </div>
          </label>
        </div>

      </div>

      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <div class="grid grid-flow-col gap-4">
            <a href="https://github.com/MaxHotiuk" class="link link-hover">GitHub</a>
            <a href="https://www.linkedin.com/in/maxhotiuk/" class="link link-hover">LinkedIn</a>
            <a href="mailto:hotiukmax@gmail.com" class="link link-hover">Email</a>
          </div>
          <div>
            <p>Copyright © 2024 - Max Hotuik</p>
          </div>
        </div>
      </footer>
    </div>
  `
})

export class AppComponent {
  title = 'Max Hotuik - Personal Website';

  toggleTheme(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const theme = isChecked ? 'dim' : 'winter';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
