import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userForm: FormGroup;
  editable: boolean=false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ){
    // build a form 
    this.userForm = this.fb.group({
      name: [{value: '', disabled: true}],
      email: [{value: '', disabled: true}],
      age: [{value: '', disabled: true}],
      creditCard: [{value:'', disabled: true}]
    });
  }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe({
      next: (data)=>{
        this.userForm.patchValue(data);
      },
      error: (err)=>{
        console.error("error fetching user details",err);
      }
    });
  }

  toggleEdit(): void{
    this.editable = !this.editable;
    if(this.editable)
      this.userForm.enable();   //this will set the disabled: false 
    else
      this.userForm.disable();
  }

  onSubmit(): void{
    if(this.userForm.valid){
      const updatedData = this.userForm.value;
      
      this.userService.updateUserDetails(updatedData).subscribe({
        next: ()=>{
          console.log('User information updated successfully');
          this.toggleEdit();
        },
        error: (err)=>{
          console.error("error updating user details",err);
        }
      });
    }
  }
}
