import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine-details',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './medicine-details.component.html',
  styleUrl: './medicine-details.component.css'
})
export class MedicineDetailsComponent {
  product: any;
  productId: string | null = null;

  // ActivatedRoute service gives you access to the router state, including the parameters of the route currently being processed 
  constructor(private router: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void{
    this.productId = this.router.snapshot.paramMap.get('id')

    if(this.productId){
      // console.log("medicineDetailsComponent initialized");

      this.productService.getProductById(this.productId).subscribe({
        next: (data)=>{
          console.log("API call success", data);

          this.product = data;
        },
        error: (err)=>{
          console.error("error getting product details from backend",err);
        }
      });
    }
  }

}
