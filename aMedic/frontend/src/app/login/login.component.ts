import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

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
  constructor(private router: Router){} /* creates a private property in the component called router, 
                                           which stores the instance of the Router service, enables navigation*/

  // functional logic: the loginForm is the state of the form we get from input
  onSubmit(loginForm: any){
    if (loginForm.valid) {
      console.log("email: ",this.email);
      console.log("password: ",this.password);
      this.router.navigate(['/home']);
    }
  }
}
