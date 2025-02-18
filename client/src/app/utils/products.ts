export class Product {
  private _itemID: string;
  private _name: string;
  private _description: string;

  constructor(itemID: string, name: string, description: string) {
    this._itemID = itemID;
    this._name = name;
    this._description = description;
  }

  get productInfo() {
    return {
      itemID: this._itemID,
      name: this._name,
      description: this._description
    }
  }
}

const PRODUCTS: Product[] = [
  new Product(
    'ftf001',
    '34 Trolley - Relaxation EP 12"',
    'First release'
  )
];
export const getProducts = () => PRODUCTS;