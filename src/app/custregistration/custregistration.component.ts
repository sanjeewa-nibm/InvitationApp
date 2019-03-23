import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustregistrationService } from '../Services/custregistration.service';

@Component({
  selector: 'app-custregistration',
  templateUrl: './custregistration.component.html',
  styleUrls: ['./custregistration.component.css']
})
export class CustregistrationComponent implements OnInit {
  product = {};
  id;
  // private custregService: CustregistrationServic
  constructor(private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
  }

  save(product) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.product));
    //  console.log(product);
    if (this.id) {

     } else {
       // this.custregService.create(product);
    }

    this.router.navigate(['']);
  }

}
