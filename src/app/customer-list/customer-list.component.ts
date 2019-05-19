import { Component, OnInit } from '@angular/core';
import { CustregistrationService } from '../Services/custregistration.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  showDeletedMessage: boolean;
  customerArray = [];

  constructor(private customerService: CustregistrationService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.customerService.deleteCustomer($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


}
