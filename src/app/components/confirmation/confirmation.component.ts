import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  code: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
    this.code = (this.confirmation(5))();
  }

  //  Create confirmation code
  confirmation = (digits: number) => function() {
  //  Randomly generate a number with some amount of digits
    let num: number = Math.floor((Math.random() * 9 * (10**(digits - 1)) + 10**(digits - 1))); 
    return num
  }

}
