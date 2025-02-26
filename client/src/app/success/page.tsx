"use client";

import Link from "next/link";
import CartNav from "../components/cart-nav";
import LogoHeader from "../components/logo-header";
import style from './success.module.css';
import { useContext, useEffect } from "react";
import { StoreContext } from "../storeProvider/store-provider";

export default function Success() {
  let { itemsInStore, setItemsInStore, loadingLocalStorage } = useContext(StoreContext);
  useEffect(() => {
    if(!loadingLocalStorage) {
      setItemsInStore([]);
    }
    
  },[loadingLocalStorage]);

  return (
    loadingLocalStorage ? null :
    <>
      <CartNav />
      <LogoHeader displayLogo={false} />
      <main>
      <p className="padding-left-1_3rem"><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Thank You</h2>
          <p className={style.centerText}>Thank you for your purchase.</p>
          <p className={style.centerText}>If you have any questions please contact us at feelthefourrecords@gmail.com</p>
        </section>

        <hr />
      </main>
    </>
  )
}