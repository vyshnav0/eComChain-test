import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderHistoryService } from '../services/order-history.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

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

  constructor(private route: ActivatedRoute, private orderHistoryService: OrderHistoryService, private userService: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = id; // Assign only if id is not null
  
      this.userService.getUserDetails().subscribe({
        next: (user) => {
          this.userId = user._id;
  
          // fetch orderhistory only after we get userid from userServices
          this.orderHistoryService.getOrderHistory(this.productId, this.userId).subscribe({
            next: (data) => {
              this.orderHistory = data;
              // console.log("boo", data);
            },
            error: (err) => {
              console.error("error fetching order history", err);
            }
          });
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
  
  
}
