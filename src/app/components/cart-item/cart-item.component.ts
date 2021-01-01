import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

  updateQuantity(item:Item) {
    let quantityInput = (<HTMLInputElement>document.getElementById("quantity")).value
    item.quantity = parseInt(quantityInput.toString());
  }

  //  Delete from list

  // onDelete(item:Item) {
  //   this.deleteItem.emit(item);
  // }

}
