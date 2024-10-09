import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // these 2 are properties bound to the input field uisng ngModel (this allows 2way data binding)
  email: string='';
  password: string='';

  //  The constructor method is called when an instance of the component is created
  constructor(private authService: AuthService, private router: Router){}   // Inject AuthService and Router

  // susbcribe: to execute an Observable and handle the results. Observables are lazy by default, meaning they don’t execute until they are subscribed to.
  onSubmit(loginForm: any){
    if (loginForm.valid) {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          console.log("login successful");
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert("invalid creds");
          console.error(error);
        },
        complete: () => {
          console.log("login request completed");
        }
      });
      
    }
  }
}
