import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-medicine-details',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatIconModule, FormsModule],
  templateUrl: './medicine-details.component.html',
  styleUrl: './medicine-details.component.css'
})
export class MedicineDetailsComponent {
  product: any;
  productId: string | null = null;
  quantity: number = 1;

  // ActivatedRoute service gives you access to the router state, including the parameters of the route currently being processed 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private userService: UserService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')

    if (this.productId) {
      // console.log("medicineDetailsComponent initialized");

      this.productService.getProductById(this.productId).subscribe({
        next: (data) => {
          console.log("API call success", data);
          this.product = data;
        },
        error: (err) => {
          console.error("error getting product details from backend", err);
        }
      });
    }
  }

  addToCart(): void {

    this.userService.getUserDetails().subscribe({
      next: (user) => {
        // console.log("User details:", user);        
        if (!user.creditCardNumber) {
          alert("Please input your credit card details first!");
          this.router.navigate([`/profile/${user._id}`]);
          return;
        }
      },
      error: (err)=>{
        console.error("error getting user details for redirection");
      }
    });


    if (this.product.stock >= this.quantity) {
      const updatedStock = this.product.stock - this.quantity;

      this.productService.updateProductStock(this.product._id, updatedStock).subscribe({
        next: (data) => {
          console.log("stock updated");
          this.product.stock = updatedStock;
        },
        error: (err) => {
          console.error("error updating stocks", err);
        }
      });
      console.log("product added to cart");
    }
  }

  goToOrderHistory(productId: string): void{
    this.router.navigate(['/order-history',{ id: productId }]);
  }
}
