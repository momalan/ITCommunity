import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-instagram-profile',
  standalone: true,
  imports: [],
  templateUrl: './instagram-profile.component.html',
  styleUrl: './instagram-profile.component.css'
})
export class InstagramProfileComponent implements OnInit {
  constructor() { }
  ngOnInit(): void{
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
  }
}
