"use client";
import Link from 'next/link';
import LogoHeader from '../components/logo-header';
import { useContext } from 'react';
import { StoreContext } from '../storeProvider/store-provider';
import CartTile from '../components/cart-tile';

export default function Cart() {
  let { itemsInStore, setItemsInStore } = useContext(StoreContext);

  return (
    <>
      <LogoHeader displayLogo={false} />

      <main>
        <p className="padding-left-1_3rem"><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Shopping Cart</h2>
          <form action="/create-checkout-session" method="POST">
            {itemsInStore.map((item, i) => <CartTile key={item.itemID} item={item} i={i} />)}
            <button className="link-like-button" type="submit" id="checkout-button">Checkout</button>
          </form>
        </section>

        <hr />

      </main>
    </>

  );
}
