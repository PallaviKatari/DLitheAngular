import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../Customer.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users: any[];
  //Accessing the service using constructor injection
  //_customerService is an instance of the CustomerService class in Customer.service.ts
  constructor(private _customerService: CustomerService) {
    this.users = this._customerService.getCustomer();
  }
// import { Component, OnInit, Input } from '@angular/core';
  @Input() user!: any;
//Toggle effect to show and hide the customer details
  userDetail = false;
  showUserDetailsToggle() {
    this.userDetail = !this.userDetail;
  }
  //class to show the change in + and - in the button
  getClass() {
    var classList = '';
    if (this.userDetail) {
      classList = 'fa fa-plus';
    } else {
      classList = 'fa fa-minus';
    }
    return classList;
  }
  ngOnInit(): void {
  }
}
