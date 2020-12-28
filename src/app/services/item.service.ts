import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // Default items, if no API
  items: Item[] = [
    new Item(1, 'Item 1', 10.5, 'This is the description'),
    new Item(2, 'Item 2', 20, 'This is the description'),
    new Item(3, 'Item 3', 30, 'This is the description'),
    new Item(4, 'Item 4', 40, 'This is the description'),
    new Item(5, 'Item 5', 50, 'This is the description'),
  ]

  constructor() { }

  deleteItem(item:Item) {
    //  delete item
  }

  getItems(): Item[] {
    //  Connect to API to return list
    return this.items
  }
}
