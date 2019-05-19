import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustregistrationService } from '../Services/custregistration.service';

@Component({
  selector: 'app-custregistration',
  templateUrl: './custregistration.component.html',
  styleUrls: ['./custregistration.component.css']
})
export class CustregistrationComponent implements OnInit {

  submitted: boolean;
  showSuccessMessage: boolean;


  constructor(private custregService: CustregistrationService) { }


  formControls = this.custregService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.custregService.form.valid) {
      if (this.custregService.form.get('$key').value == null) {
        this.custregService.create(this.custregService.form.value);
      } else {
        this.custregService.update(this.custregService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.custregService.form.reset();
      // this is to be done for proper reset operation
      this.custregService.form.setValue({
        $key: null,
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        seatD : '',
        description: ''
      });
    }
  }
}
