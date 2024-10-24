import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="grid gap-8">
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-3xl mb-4">Get in Touch</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input type="text" formControlName="name" class="input input-bordered" />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="email" formControlName="email" class="input input-bordered" />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Message</span>
                  </label>
                  <textarea formControlName="message" class="textarea textarea-bordered h-32"></textarea>
                </div>

                <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">Send Message</button>
              </form>
            </div>

            <div class="bg-base-300 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4">Other Ways to Connect</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-bold">Email</h4>
                  <a href="mailto:hotiukmax&#64;gmail.com" class="link">hotiukmax&#64;gmail.com</a>
                </div>
                <div>
                  <h4 class="font-bold">Social Media</h4>
                  <div class="flex gap-4 mt-2">
                    <!-- Add your social media icons here -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;

      // Send the email using EmailJS
      const templateParams = {
        from_name: name,
        message: message,
        reply_to: email
      };

      emailjs.send('service_qdb6z0p', 'template_9kiie6n', templateParams, 'JkeQbQNIMYPNvrd9H')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.contactForm.reset();
        }, (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  }
}
