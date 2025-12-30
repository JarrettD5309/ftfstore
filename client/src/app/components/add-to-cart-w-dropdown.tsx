"use client";

import { useContext, useState } from "react";
import { StoreContext } from "../storeProvider/store-provider";
import Link from "next/link";
import styles from "./add-to-cart-w-dropdown.module.css";
import { StoreItem } from "../utils/classes";

export default function AddToCartWDropdown(props: { itemID: string, options: string[] }) {
  let { itemsInStore, setItemsInStore, loadingLocalStorage } = useContext(StoreContext);
  const [isAdded, setIsAdded] = useState(false);
  const [isGoToCart, setIsGoToCart] = useState(false);
  const [option, setOption] = useState(props.options[0]);

  return (
    (<div className={`margin-top-1rem ` + styles.outerBorder}>
      {
        isGoToCart ?
          <Link href="/cart" className={`link-button ` + styles.linkStyle}>GO TO CART</Link> :
          (
            <button
              className={`link-like-button ` + styles.buttonMinWidth}
              onClick={() => {
                if (!isAdded) {
                  setItemsInStore(blockIfInStore());
                  setIsAdded(true);
                  activeAddTimer();
                }
              }}
            >
              {isAdded ? 'ADDED!!!' : 'ADD TO CART'}
            </button>
          )
      }

      <br />
      <label className={styles.sizeLabel} htmlFor="sizes">Choose a size:</label>
      <select
        className={styles.sizeSelect}
        name="sizes"
        id="sizes"
        value={option}
        onChange={e => { setOption(e.target.value) }}
      >
        {props.options.map((item, i) => <option key={item} value={item}>{item.toUpperCase()}</option>)}
      </select>
    </div>)
  );

  function activeAddTimer() {
    setTimeout(() => setIsGoToCart(true), 3000);
  }

  function blockIfInStore() {
    return itemsInStore.find(item => item.itemID === props.itemID + option) ?
      [...itemsInStore] :
      [...itemsInStore, new StoreItem(props.itemID + option, 1)]
  }
}