import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="hero min-h-[80vh] bg-base-200 rounded-lg">
      <div class="hero-content flex-col lg:flex-row-reverse gap-8">
        <!-- Photo Container -->
        <div class="relative w-64 h-64 lg:w-96 lg:h-96">
          <div class="absolute inset-0 bg-primary/20 rounded-lg transform rotate-6"></div>
          <div class="absolute inset-0 bg-primary/20 rounded-lg transform -rotate-6"></div>
          <img
            src="profile.jpg"
            alt="Maksym Hotiuk"
            class="relative z-10 w-full h-full object-cover rounded-lg shadow-2xl"
          >
        </div>

        <!-- Text Content -->
        <div class="max-w-md text-center lg:text-left">
          <h1 class="text-5xl font-bold">Maksym Hotiuk</h1>
          <p class="text-xl mt-2">Full Stack Developer</p>
          <p class="py-6">Creating efficient, scalable applications with ASP.NET and Angular. Currently pursuing Computer Science
          at Ivan Franko National University of Lviv.</p>
          <div class="flex gap-4 justify-center lg:justify-start">
            <a routerLink="/portfolio" class="btn btn-primary">View My Work</a>
            <a routerLink="/contact" class="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Notable Projects Preview -->
    <div class="mt-12 grid gap-8">
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Notable Projects</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title text-lg">Task Management System</h3>
                <p>Web application for processing heavy tasks with dynamic load balancing across multiple servers.</p>
                <div class="card-actions justify-end mt-4">
                  <a routerLink="/portfolio" class="btn btn-sm btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title text-lg">Encryption Web API</h3>
                <p>Secure API for encryption/decryption tasks with JWT authentication and MySQL storage.</p>
                <div class="card-actions justify-end mt-4">
                  <a routerLink="/portfolio" class="btn btn-sm btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title text-lg">Fibonacci Task Manager</h3>
                <p>Platform for submitting and tracking Fibonacci calculations with real-time updates.</p>
                <div class="card-actions justify-end mt-4">
                  <a routerLink="/portfolio" class="btn btn-sm btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
