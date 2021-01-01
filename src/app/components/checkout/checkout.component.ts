import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Item } from '../../models/Item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  total!: number;
  //items!: Item[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.total = params['total'];

        //  Not possible with queryParams only

        // this.items = params['items'];
      }
    )
  }

  validateForms() {
    if ((<HTMLInputElement>document.getElementById("cardNumber")).value.length != 16) {
      alert("Please enter a valid card number.")
      console.log((<HTMLInputElement>document.getElementById("cardNumber")).value)
      return false;
    } else if ((<HTMLInputElement>document.getElementById("expityMonth")).value.length != 2) {
      alert("Please enter a valid month.")
      return false;
    } else if ((<HTMLInputElement>document.getElementById("expityYear")).value.length != 2) {
      alert("Please enter a valid year.")
      return false;
    } else if ((<HTMLInputElement>document.getElementById("cvCode")).value.length != 3) {
      alert("Please enter a valid CV Code.")
      return false
    } else {
      return true;
    }
  }

  handlePay() {
    if (this.validateForms()) {
      this.router.navigate(['/confirmation'])
    }
  }

}
