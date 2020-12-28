import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //  Delete from list

  // onDelete(item:Item) {
  //   this.deleteItem.emit(item);
  // }

}
