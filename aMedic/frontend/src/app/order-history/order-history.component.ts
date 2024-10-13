import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderHistoryService } from '../services/order-history.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit{

  orderHistory: any[] = [];
  productId: string = '';
  userId: string = '';

  constructor(private route: ActivatedRoute, private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = id; // Assign only if id is not null
      this.userId = '6705805b10383e99a0ca601e';
  
      this.orderHistoryService.getOrderHistory(this.productId, this.userId).subscribe({
        next: (data) => {
          this.orderHistory = data;
          console.log(data);
        },
        error: (err) => {
          console.error("error fetching order history", err);
        }
      });
    } else {
      console.error("Product ID is missing.");
      // Handle the case where the product ID is not available
    }
  }
  
}
