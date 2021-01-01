import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Item[] = []
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems()

    this.total = (this.addPrices(this.items)());
  }

  //  add up prices to get total
  addPrices = (items: Item[]) => function() {
    let total = 0;
    items.forEach(item => total += item.price * item.quantity);
    return total;
  }

  //  update quantity
  updateQuantities(items: Item[]) {
    items.forEach(item => {
      let id = "quantity" + item.id;
      let quantity = parseInt((<HTMLInputElement>document.getElementById(id)).value.toString())
      if (quantity < 1) {
        alert("Quantity must be greater than 0.")
      } else {
        item.quantity = quantity
      }
    });
    this.total = (this.addPrices(this.items))()
  }

}
