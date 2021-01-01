import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // Default items, if no API
  items: Item[] = [
    new Item(1, 'Item 1', 10.5, 2, 'This is the description', 'http://placehold.it/100x70'),
    new Item(2, 'Item 2', 20, 1, 'This is the description', 'http://placehold.it/100x70'),
    new Item(3, 'Item 3', 30, 1, 'This is the description', 'http://placehold.it/100x70'),
    new Item(4, 'Item 4', 40, 1, 'This is the description', 'http://placehold.it/100x70'),
    new Item(5, 'Item 5', 50, 1, 'This is the description', 'http://placehold.it/100x70'),
  ]

  constructor() { }

  deleteItem(target:Item) {
    //  delete item
    this.items.filter(item => item.id != target.id)
  }

  getItems(): Item[] {
    //  Connect to API to return list
    return this.items
  }

}
