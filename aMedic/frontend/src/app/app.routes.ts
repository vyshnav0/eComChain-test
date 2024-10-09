import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    { path: '', component: LoginComponent },    //default route
    { path: 'home', component: HomeComponent},







    { path: '**', component: LoginComponent}    //any unknown route, should be at the last
];
