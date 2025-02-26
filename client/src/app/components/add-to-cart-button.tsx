"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../storeProvider/store-provider";
import { StoreItem } from "../utils/classes";
import styles from "./add-to-cart-button.module.css";

export default function AddToCartButton(props: { itemID: string }) {
  let { itemsInStore, setItemsInStore, loadingLocalStorage } = useContext(StoreContext);
  const [isAdded, setIsAdded] = useState(false);
  const [isGoToCart, setIsGoToCart] = useState(false);
  const [prevAdded, setPrevAdded] = useState(false);

  useEffect(() => {
    if(!loadingLocalStorage) {
      setPrevAdded(!!itemsInStore.find(item => item.itemID === props.itemID));
    }
    
  }, [loadingLocalStorage]);

  return (
    isGoToCart || prevAdded ?
      <Link href="/cart" className={`link-button margin-top-1rem ` + styles.linkStyle}>GO TO CART</Link> :
      (<button
        className={`link-like-button margin-top-1rem ` + styles.buttonMinWidth}
        onClick={() => {
          if (!isAdded) {
            setItemsInStore(blockIfInStore());
            setIsAdded(true);
            activeAddTimer();
          }
        }}
      >
        {isAdded ? 'ADDED!!!' : 'ADD TO CART'}
      </button>)
  );

  function activeAddTimer() {
    setTimeout(() => setIsGoToCart(true), 3000);
  }

  function blockIfInStore() {
    return itemsInStore.find(item => item.itemID === props.itemID) ?
      [...itemsInStore] :
      [...itemsInStore, new StoreItem(props.itemID, 1)]
  }
}