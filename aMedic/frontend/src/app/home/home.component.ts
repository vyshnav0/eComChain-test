import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// HomeComponent is using the OnInit lifecycle hook
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {  // the lifecycle hook mentioned above, runs when comp is initialised
    this.productService.getProducts().subscribe({
      next: (data) => {
        // console.log("products",data);
        this.products = data;
      },
      error: (err) => {
        console.log("error fetching products from backend", err);
      }
    });
  }
}
