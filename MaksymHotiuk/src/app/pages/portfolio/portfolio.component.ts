import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid gap-8">
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-3xl mb-4">My Projects</h2>
          <div class="grid md:grid-cols-2 gap-6">
            @for (project of projects; track project.id) {
              <div class="card bg-base-300">
                <div class="card-body">
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p>{{ project.description }}</p>

                  <div class="my-4">
                    <h4 class="font-bold">Key Features:</h4>
                    <ul class="list-disc ml-5">
                      @for (feature of project.keyFeatures; track feature) {
                        <li>{{ feature }}</li>
                      }
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2 my-2">
                    @for (tech of project.technologies; track tech) {
                      <span class="badge badge-primary">{{ tech }}</span>
                    }
                  </div>
                  <div class="card-actions justify-end">
                    @if (project.githubUrl) {
                      <a href="{{ project.githubUrl }}" target="_blank" class="btn btn-outline btn-sm">GitHub</a>
                    }
                    @if (project.liveUrl) {
                      <a href="{{ project.liveUrl }}" target="_blank" class="btn btn-primary btn-sm">Live Demo</a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Task Management System with Load Balancing',
      description: 'Developed a comprehensive web application designed to manage and process resource-intensive tasks effectively.',
      keyFeatures: [
        'Dynamic Load Balancing: Implemented a load balancing mechanism that distributes incoming tasks across multiple servers, ensuring optimal utilization of resources.',
        'User-Friendly Interface: Built a responsive and intuitive interface using Angular, allowing users to easily submit tasks and monitor their status in real time.',
        'Robust Backend Services: Leveraged ASP.NET Core to create RESTful APIs that handle task management operations.',
        'Performance Monitoring: Integrated monitoring tools to track server performance and task execution times.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'MySQL', 'Load Balancing'],
      githubUrl: 'https://github.com/yourusername/task-management-system',
    },
    {
      id: 2,
      title: 'Encryption Web API',
      description: 'Created a secure API specifically for encryption and decryption tasks, emphasizing data integrity and user authentication.',
      keyFeatures: [
        'Secure API Design: Developed a RESTful API using ASP.NET Core that allows users to submit data for encryption or decryption securely.',
        'Responsive Angular Frontend: The frontend features a clean interface for user data input and result viewing.',
        'Persistent Storage with MySQL: Utilized MySQL for data storage, ensuring data integrity while allowing for complex queries.',
        'JWT-Based Authentication: Implemented JWT for secure user access to the API.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'MySQL', 'JWT'],
    },
    {
      id: 3,
      title: 'Fibonacci Task Manager',
      description: 'Created a platform for users to submit and manage tasks related to Fibonacci numbers, with real-time feedback and validation.',
      keyFeatures: [
        'Task Submission and Validation: Users can submit tasks specifying a number and receive instant validation.',
        'Real-Time Progress Tracking: Developed a feature that allows users to monitor the progress of their tasks in real time.',
        'Angular-Driven User Experience: The frontend is designed to be intuitive and responsive, enhancing user engagement.',
        'Backend Integration: The ASP.NET Core backend validates submitted numbers against the Fibonacci sequence.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'MySQL', 'JWT'],
      githubUrl: 'https://github.com/yourusername/fibonacci-task-manager'
    }
  ];
}
