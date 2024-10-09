import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
  constructor(){}

  // functional logic 
  onSubmit(loginForm: any){
    if (loginForm.valid) {
      console.log("email: ",this.email);
      console.log("password: ",this.password);
    }
  }
}
