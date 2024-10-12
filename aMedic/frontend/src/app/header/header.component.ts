import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  name: string = 'user';  //default name
  constructor(private router: Router, private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe({
      next: (data)=>{
        this.name = data.name;
      },
      error: (err)=>{
        console.error('Error fetching user details', err);
      }
    });
  }

  goToHome(): void{
    this.router.navigate(['/home'])
  }

  goToProfile(): void{
    this.router.navigate(['/profile'])
  }

  logout(): void{
    this.router.navigate(['/'])
  }

}
