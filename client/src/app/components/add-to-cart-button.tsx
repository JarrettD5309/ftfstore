"use client";
import { useContext, useState } from "react";
import { StoreContext } from "../storeProvider/store-provider";
import { StoreItem } from "../utils/classes";
import styles from "./add-to-cart-button.module.css";

export default function AddToCartButton(props: { itemID: string }) {
  let { itemsInStore, setItemsInStore } = useContext(StoreContext);
  const [ isActive, setIsActive] = useState(false);

  return (
    <button
      className={`link-like-button margin-top-1rem ` + styles.buttonMinWidth}
      onClick={() => {
        setItemsInStore([...itemsInStore, new StoreItem(props.itemID, 1)]);
        activeAddTimer();
      }}
    >
      {isActive ? 'ADDED!!!' : 'ADD TO CART'}
    </button>
  );

  function activeAddTimer() {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3000);
  }
}