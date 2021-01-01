import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  total!: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.total = params['total'];

        //  At some point, add the ability to pass the items array back to the cart component, should the user click the final button.

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
