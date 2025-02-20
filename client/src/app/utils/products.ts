import ftf001Label from '../../../public/images/FTF_001_front-center.jpg'

export class Product {
  private _itemID: string;
  private _artist: string;
  private _title: string;
  private _description: string;
  private _image: string;
  private _price: number;

  constructor(itemID: string, artist: string, title: string, description: string, image: string, price: number) {
    this._itemID = itemID;
    this._artist = artist;
    this._title = title;
    this._description = description;
    this._image = image;
    this._price = price;
  }

  get productInfo() {
    return {
      itemID: this._itemID,
      artist: this._artist,
      title: this._title,
      description: this._description,
      image: this._image,
      price: this._price
    }
  }
}

const PRODUCTS: Product[] = [
  new Product(
    'ftf001',
    '34 Trolley',
    'Relaxation EP 12"',
    'First release',
    ftf001Label.src,
    20.00
  ),
  new Product(
    'ftf002',
    'Countach',
    'Mechanical Deathwish Mixtape',
    'First Mixtape',
    ftf001Label.src,
    20.00
  ),
];
export const getProducts = () => PRODUCTS;