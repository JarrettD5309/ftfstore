export class StoreItem {
  private _itemID: string;
  private _quantity: number;

  constructor(itemID: string, quantity: number) {
    this._itemID = itemID;
    this._quantity = quantity;
  }

  get itemID() {
    return this._itemID;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(newQuant: number) {
    this._quantity = newQuant;
  }
}