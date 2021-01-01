export class Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    imageUrl: string;

    constructor (id: number, name: string, price: number = 0, quantity: number = 0, description: string = "", imageUrl: string = "") {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
        this.imageUrl = imageUrl
    }
}