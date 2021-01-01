import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item!: Item;
  @Output() deleteItemEvent = new EventEmitter<Item>();


  constructor() { 
  }

  //  Delete Items
  deleteItem(item: Item) {
    this.deleteItemEvent.emit(item)
  }

  ngOnInit(): void {
  }

}
