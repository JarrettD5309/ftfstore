"use client";
import Link from 'next/link';
import LogoHeader from '../components/logo-header';
import { useContext } from 'react';
import { StoreContext } from '../storeProvider/store-provider';

export default function Cart() {
  let {itemsInStore, setItemsInStore } = useContext(StoreContext);
  return (
    <>
      <LogoHeader displayLogo={false} />

      <main>
        <p className="padding-left-1_3rem"><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Shopping Cart</h2>
          <p>Item #: {itemsInStore.length}</p>
        </section>

        <hr />

      </main>
    </>

  );
}
