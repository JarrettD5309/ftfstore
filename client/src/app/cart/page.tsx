"use client";
import Link from 'next/link';
import LogoHeader from '../components/logo-header';
import { useContext } from 'react';
import { StoreContext } from '../storeProvider/store-provider';
import { getProducts } from '../utils/products';
import { getStripePriceID } from '../utils/stripe-info';

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
            {itemsInStore.map((item, i) => {
              const product = getProducts().find(product => product.productInfo.itemID === item.itemID);
              return (
                <fieldset key={item.itemID}>
                  <input type="hidden" id="priceID" name={`price_${i}`} value={getStripePriceID(item.itemID)} />
                  <label htmlFor="quantity">Quantity (between 1 and 5)</label>
                  <input type="number" id="quantity" name={`quantity_${i}`} min="1" max="5" />
                </fieldset>
              )

            })}
            <fieldset>
              <input type="hidden" id="priceID" name="price_1" value="price_1Qpxb6AthGHyEEe1ZWht45dp" />
              <label htmlFor="quantity">Quantity (between 1 and 5)</label>
              <input type="number" id="quantity" name="quantity_1" min="1" max="5" />
            </fieldset>
            <button className="link-like-button" type="submit" id="checkout-button">Checkout</button>
          </form>
        </section>

        <hr />

      </main>
    </>

  );
}
