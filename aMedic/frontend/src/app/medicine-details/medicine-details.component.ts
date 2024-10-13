import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.router.snapshot.paramMap.get('id')

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
}
