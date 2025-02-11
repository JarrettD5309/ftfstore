"use client";
import Link from "next/link";
import styles from "./cart-nav.module.css";
import { useContext } from "react";
import { StoreContext } from "../storeProvider/store-provider";

export default function CartNav() {
    let {itemsInStore, setItemsInStore } = useContext(StoreContext);
    return (
        <nav className={styles.cartNav}>
        <Link href="/cart" className="link-button">CART ({itemsInStore.length})</Link>
      </nav>
    );
  }