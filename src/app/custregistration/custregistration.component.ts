import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custregistration',
  templateUrl: './custregistration.component.html',
  styleUrls: ['./custregistration.component.css']
})
export class CustregistrationComponent implements OnInit {
  product = {};

  constructor() { }

  ngOnInit() {
  }

   save(product) {
     console.log(product);
    // if (this.id)
    //    this.productService.update(this.id, product);
    // else
    //    this.productService.create(product);


    // this.router.navigate(['/admin/products']);
  }

}
