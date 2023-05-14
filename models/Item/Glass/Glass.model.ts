import { ID, Item } from '../Item.model';

export class Glass extends Item {
  constructor(id: ID, name: string, price: number) {
    super(id, name, price);
  }
}
