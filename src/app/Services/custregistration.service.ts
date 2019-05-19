import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustregistrationService {


customerList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { 
    this.customerList = this.firebase.list('Customers');

  }

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl(''),
    seatD: new FormControl(''),
    description:new FormControl('')
  });


  create(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      address: customer.address,
      seatD: customer.seatD,
      description:customer.description
    });

  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  update(customer) {
    this.customerList.update(customer.$key,
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        address: customer.address,
        seatD: customer.seatD,
        description:customer.description
      });
  }

  getCustomers() {
    this.customerList = this.firebase.list('Customers');
    return this.customerList.snapshotChanges();
  }
  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }

}
