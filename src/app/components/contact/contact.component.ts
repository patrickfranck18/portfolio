import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {} 

  async send(){
    emailjs.init('MISvNePqmQsbf33QN');
    let response = await emailjs.send("service_0gs39ke","template_apgb5z3",{
      from_name: this.contactForm.value.from_name,
      to_name: this.contactForm.value.to_name,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      from_email: this.contactForm.value.from_email,
      });

      alert('Le message a été envoyé.');
      this.contactForm.reset();

  }
}
/*

onSubmit() {
    // Send an email to your inbox.
    const emailOptions = {
      from: this.contactForm.get('email'),
      to: 'franckpatrick18@gmail.com',
      subject: this.contactForm.get('subject'),
      text: `
        Your name: ${this.contactForm.get('name')}
        Your email: ${this.contactForm.get('email')}
        Your message: ${this.contactForm.get('message')}
      `
    };

    this.http.post('https://api.sendgrid.com/v3/mail/send', emailOptions);
  }*/