import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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

}
