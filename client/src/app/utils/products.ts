import ftf001Label from '../../../public/images/FTF_001_front-center.jpg'

export class Product {
  private _itemID: string;
  private _name: string;
  private _description: string;
  private _image: string;
  private _price: string;

  constructor(itemID: string, name: string, description: string, image: string, price: string) {
    this._itemID = itemID;
    this._name = name;
    this._description = description;
    this._image = image;
    this._price = price;
  }

  get productInfo() {
    return {
      itemID: this._itemID,
      name: this._name,
      description: this._description,
      image: this._image,
      price: this._price
    }
  }
}

const PRODUCTS: Product[] = [
  new Product(
    'ftf001',
    '34 Trolley - Relaxation EP 12"',
    'First release',
    ftf001Label.src,
    '$20'
  )
];
export const getProducts = () => PRODUCTS;