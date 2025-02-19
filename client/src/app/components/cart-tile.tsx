import { useState } from "react";
import { StoreItem } from "../utils/classes";
import { getProducts } from "../utils/products";
import { getStripePriceID } from "../utils/stripe-info";

import styles from './cart-tile.module.css';

export default function CartTile(props: { item: StoreItem, i: number }) {
  const [quantity, setQuantity] = useState(props.item.quantity.toString());
  const product = getProducts().find(product => product.productInfo.itemID === props.item.itemID);
  return (
    <fieldset className={styles.fieldsetStyle}>
      <img className={styles.imageTile} src={product?.productInfo.image}
        alt="vinyl label for 34 Trolley - Relaxation EP - FTF-001" />
      <p>{product?.productInfo.name}</p>
      <p>{product?.productInfo.price} each</p>
      <input type="hidden" id="priceID" name={`price_${props.i}`} value={getStripePriceID(props.item.itemID)} />
      <label htmlFor="quantity" className={styles.numberLabel}>Quantity</label>
      <input
      className={styles.numberInput}
        type="number"
        id="quantity"
        name={`quantity_${props.i}`}
        min="1" max="5"
        value={quantity}
        onChange={e => {
          setQuantity(e.target.value);
          props.item.quantity = parseInt(e.target.value);
        }}
      />
    </fieldset>
  )
}