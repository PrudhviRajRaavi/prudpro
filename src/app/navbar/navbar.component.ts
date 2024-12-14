import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {

  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  // constructor to inject services
  // variable to get element by id hammenu
  @ViewChild('hammenu') hammenu!: ElementRef;
  @ViewChild('closemenu') closemenu!: ElementRef;
  @ViewChild('mobilemenu') mobilemenu!: ElementRef;
  isOpen = true;
  constructor() { }

  

  ngAfterViewInit() {
    this.open(); // Access native elements here
  }
  // Open method to toggle navbar on click of hamburger icon in single method
  open() {
    this.isOpen = !this.isOpen; // Toggle state
  
    this.hammenu.nativeElement.classList.toggle('hidden');
    this.closemenu.nativeElement.classList.toggle('hidden');
    this.mobilemenu.nativeElement.classList.toggle('hidden');
  }
  onSubmit() {
    // Here you would typically implement form submission logic
    // For now, we'll just log the form data
    console.log('Contact Form Submitted:', this.contactForm);
    
    // TODO: Implement actual form submission (e.g., send to backend)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form after submission
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }

}
