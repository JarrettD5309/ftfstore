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
    'Early 1980s NYC-style Post-Punk Mutant Disco out of Philly. First solo release from Jarrett Dougherty of legendary DIY Punk band Screaming Females. For fans of: ESG, Tom Tom Club, Liquid Liquid, Dinosaur L',
    ftf001Label.src,
    20.00
  ),
];

const OUT_OF_STOCK: string[] = ['ftf001'];

export const getProducts = () => PRODUCTS;

export const isOutOfStock = (itemID: string): boolean => OUT_OF_STOCK.includes(itemID);