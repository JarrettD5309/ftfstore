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
            {itemsInStore.map(item => {
              const product = getProducts().find(product => product.productInfo.itemID === item.itemID);
              return (
                <fieldset key={item.itemID}>
                  <input type="hidden" id="priceID" name="product1price" value="price_1QoXfKAthGHyEEe1h7ScHrT3" />
                  <label htmlFor="quantity">Quantity (between 1 and 5)</label>
                  <input type="number" id="quantity" name="product1quantity" min="1" max="5" />
                </fieldset>
              )

            })}
            <fieldset>
              <input type="hidden" id="priceID" name="product2price" value="price_1Qpxb6AthGHyEEe1ZWht45dp" />
              <label htmlFor="quantity">Quantity (between 1 and 5)</label>
              <input type="number" id="quantity" name="product2quantity" min="1" max="5" />
            </fieldset>
            <button className="link-like-button" type="submit" id="checkout-button">Checkout</button>
          </form>
        </section>

        <hr />

      </main>
    </>

  );
}
