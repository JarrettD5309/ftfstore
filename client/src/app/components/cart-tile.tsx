import { useState } from "react";
import { StoreItem } from "../utils/classes";
import { getProducts } from "../utils/products";
import { getStripePriceID } from "../utils/stripe-info";

import styles from './cart-tile.module.css';

export default function CartTile(props: { item: StoreItem, i: number }) {
  const [quantity, setQuantity] = useState(props.item.quantity.toString());
  const product = getProducts().find(product => product.productInfo.itemID === props.item.itemID);
  if (!product) {
    return <></>;
  }

  return (
    <fieldset className={styles.fieldsetStyle}>
      <div>
        <img className={styles.imageTile} src={product?.productInfo.image}
          alt="vinyl label for 34 Trolley - Relaxation EP - FTF-001" />
      </div>
      <div>
        <p>{product?.productInfo.title}</p>
        <p>{product?.productInfo.artist}</p>
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
      </div>
      <div className={styles.priceColumn}>
        <p>${product?.productInfo.price * props.item.quantity}</p>
      </div>
    </fieldset>
  )
}