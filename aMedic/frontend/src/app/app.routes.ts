import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },    //default route
    { path: 'home', component: HomeComponent},
    { path: 'meds/:id', component: MedicineDetailsComponent },







    { path: '**', component: HomeComponent}    //any unknown route, should be at the last
];
