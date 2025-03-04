"use client";
import Link from 'next/link';
import LogoHeader from '../components/logo-header';
import { useContext } from 'react';
import { StoreContext } from '../storeProvider/store-provider';
import CartTile from '../components/cart-tile';
import { getProducts } from '../utils/products';
import style from './cart.module.css';

export default function Cart() {
  let { itemsInStore, setItemsInStore, loadingLocalStorage } = useContext(StoreContext);
  const subtotal = calcSubtotal();

  return (
    <>
      <LogoHeader displayLogo={false} />

      <main>
        <p className="padding-left-1_3rem"><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Shopping Cart</h2>
          {
            itemsInStore.length === 0 ?
              <p>Your cart is empty</p> :
              <form action="/create-checkout-session" method="POST">
                {itemsInStore.map((item, i) => <CartTile key={item.itemID} item={item} i={i} />)}
                <hr />
                <div className={style.flexboxSubtotal}>
                  <p>Subtotal: </p>
                  <p>${subtotal}</p>
                </div>
                <p>Taxes and shipping calculated at checkout</p>

                <fieldset className={style.locationFieldset}>
                  <p>Where are we shipping to?</p>
                  <input className={style.locationInput} type="radio" id="usa" name="location" value="USA" required />
                  <label htmlFor="usa" className={style.locationLabel}>USA</label>
                  <br />
                  <input className={style.locationInput} type="radio" id="canada" name="location" value="CANADA" required />
                  <label htmlFor="canada" className={style.locationLabel}>CANADA</label>
                  <br />
                  <input className={style.locationInput} type="radio" id="world" name="location" value="WORLD" required />
                  <label htmlFor="world" className={style.locationLabel}>SOMEWHERE ELSE</label>
                </fieldset>

                <div className={style.flexboxCheckout}>
                  <button className="link-like-button" type="submit" id="checkout-button">Checkout</button>
                </div>
              </form>
          }

        </section>

        <hr />

      </main>
    </>

  );

  function calcSubtotal() {
    let subtotal = 0;
    itemsInStore.forEach(item => {
      const product = getProducts().find(product => product.productInfo.itemID === item.itemID);
      if (product) {
        subtotal += (product?.productInfo.price * item.quantity);
      }
    });
    return subtotal;
  }
}
