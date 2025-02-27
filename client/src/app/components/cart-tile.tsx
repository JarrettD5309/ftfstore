"use client";
import { useContext, useState } from "react";
import { StoreItem } from "../utils/classes";
import { getProducts } from "../utils/products";
import { getStripePriceID } from "../utils/stripe-info";

import styles from './cart-tile.module.css';
import { StoreContext } from "../storeProvider/store-provider";

export default function CartTile(props: { item: StoreItem, i: number }) {
  let { itemsInStore, setItemsInStore, loadingLocalStorage } = useContext(StoreContext);
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
          min="1" max="10"
          value={quantity}
          onChange={e => {
            setQuantity(e.target.value);
            setItemsInStore(setItems(parseInt(e.target.value)));
          }}
        />
        <button className={styles.removeButton} onClick={removeItem}>Remove</button>
      </div>
      <div className={styles.priceColumn}>
        <p>${product?.productInfo.price * props.item.quantity}</p>
      </div>
    </fieldset>
  );

  function setItems(quantity: number) {
    const newArray = [...itemsInStore];
    const index = newArray.findIndex(item => item.itemID === props.item.itemID);
    newArray[index].quantity = quantity;
    return newArray;
  }

  function removeItem() {
    let newArray = [...itemsInStore];
    newArray = newArray.filter(item => item.itemID != props.item.itemID);
    setItemsInStore(newArray);
  }
}