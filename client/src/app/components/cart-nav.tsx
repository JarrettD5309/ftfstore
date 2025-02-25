"use client";
import Link from "next/link";
import styles from "./cart-nav.module.css";
import { useContext } from "react";
import { StoreContext } from "../storeProvider/store-provider";

export default function CartNav() {
  let { itemsInStore, setItemsInStore } = useContext(StoreContext);
  const quantityInStore = calcItemsInStore();

  return (
    <nav className={styles.cartNav}>
      <Link href="/cart" className={`link-button ${styles.marginRight1dot3rem} ` + (itemsInStore.length > 0 && `${styles.highlight}`)}>CART ({quantityInStore})</Link>
    </nav>
  );

  function calcItemsInStore() {
    let quantity = 0;
    itemsInStore.forEach(item => quantity += item.quantity);
    return quantity;
  }
}