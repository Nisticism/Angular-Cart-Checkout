import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Item[] = []
  total: number = 0;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems()

    //  I wanted to be able to set this up, but I can't send complex objects with queryParams apparently

    // //  If we get items from somewhere else, it will happen here:
    // this.route.queryParams.subscribe(
    //   params => {
    //     // receive the items if they exist
    //     if (params['items']) {
    //       this.items = params['items'];
    //     }
    //   }
    // )

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

  deleteItem(iteme:Item) {
    this.items = this.items.filter(item => item.id != iteme.id)
    this.total = (this.addPrices(this.items))()
  }

}
