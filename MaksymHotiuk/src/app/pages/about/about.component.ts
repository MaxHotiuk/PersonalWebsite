import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="grid gap-8">
      <!-- Introduction Section -->
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-3xl mb-4">About Me</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <p class="text-lg">
                Hello! I'm Maksym Hotiuk, a passionate and driven full-stack developer with a focus on creating efficient,
                scalable applications using <span class="font-semibold">ASP.NET</span> and
                <span class="font-semibold">Angular</span>.
              </p>
              <p>
                I am currently a third-year student at <span class="font-semibold">Ivan Franko National University of Lviv</span>,
                majoring in Computer Science, where I continue to build and expand my technical knowledge.
              </p>
              <div class="card bg-base-300 p-4">
                <h3 class="font-bold text-lg mb-2">Education</h3>
                <p class="font-semibold">Ivan Franko National University of Lviv</p>
                <p>Bachelor of Computer Science – 3rd Year</p>
                <p>Expected Graduation: 2025</p>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"></div>
              <img
                src="profile-2.jpg"
                alt="Maksym Hotiuk"
                class="relative z-10 rounded-lg w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Skills and Expertise</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title">Full Stack Development</h3>
                <p>Proficient in developing full-stack applications using ASP.NET for the backend and Angular for the frontend.
                My focus is on crafting clean, maintainable, and efficient code to deliver seamless user experiences.</p>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title">Database Management</h3>
                <p>Experience with MySQL, SQLite, and PostgreSQL, handling complex queries and optimizing database performance.
                Skilled in both relational data models and performance tuning.</p>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title">Load Balancing & Heavy Task Processing</h3>
                <p>Developed applications that handle resource-intensive tasks, implementing load balancing to enhance
                performance and scalability.</p>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body">
                <h3 class="card-title">Cloud Services</h3>
                <p>Experienced in deploying and managing applications on Microsoft Azure, utilizing cloud resources to scale
                applications and ensure high availability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies Section -->
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Technologies & Tools</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="card bg-base-300">
              <div class="card-body p-4">
                <h3 class="font-bold mb-2">Frontend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-primary">Angular</span>
                  <span class="badge badge-primary">TypeScript</span>
                  <span class="badge badge-primary">HTML5</span>
                  <span class="badge badge-primary">CSS3</span>
                </div>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body p-4">
                <h3 class="font-bold mb-2">Backend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-primary">ASP.NET Core</span>
                  <span class="badge badge-primary">C#</span>
                  <span class="badge badge-primary">Entity Framework</span>
                </div>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body p-4">
                <h3 class="font-bold mb-2">Databases</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-primary">MySQL</span>
                  <span class="badge badge-primary">SQLite</span>
                  <span class="badge badge-primary">PostgreSQL</span>
                </div>
              </div>
            </div>
            <div class="card bg-base-300">
              <div class="card-body p-4">
                <h3 class="font-bold mb-2">Other</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-primary">Azure</span>
                  <span class="badge badge-primary">Git</span>
                  <span class="badge badge-primary">Docker</span>
                  <span class="badge badge-primary">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
}
