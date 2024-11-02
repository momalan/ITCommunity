import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  accService = inject(AccountService);
  usernameDisplay: any;
  model: any = {};

  login() {
    this.accService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.usernameDisplay = this.model.username;
      },
      error: error => console.log(error)
    });
  }

  logout() {
    this.accService.logout();
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user){
      this.usernameDisplay = JSON.parse(user).username;
    }
  }
}
