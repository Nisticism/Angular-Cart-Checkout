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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.itemService.getItems())
    //this.itemService.getItems()
  }

}
