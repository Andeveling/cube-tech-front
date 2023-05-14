export type ID = number | string;
export class Item {
  id: ID;
  name: string;
  price: number;
  constructor(id: ID, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
