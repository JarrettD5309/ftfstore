"use client";
import { createContext, useEffect, useState } from "react";
import { StoreItem } from "../utils/classes";
import { isOutOfStock } from "../utils/products";

export interface StoreItemContext {
  itemsInStore: StoreItem[];
  setItemsInStore: React.Dispatch<React.SetStateAction<StoreItem[]>>;
  loadingLocalStorage: boolean;
}

export const StoreContext = createContext<StoreItemContext>({ itemsInStore: [], setItemsInStore: () => { }, loadingLocalStorage: true });

export function StoreProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [itemsInStore, setItemsInStore] = useState<StoreItem[]>([]);
  const [loadingLocalStorage, setLoadingLocalStorage] = useState(true);
  const value = { itemsInStore, setItemsInStore, loadingLocalStorage };

  useEffect(() => {
    const savedItems = getInitialState();
    setItemsInStore(savedItems);
    setLoadingLocalStorage(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('storeItems', JSON.stringify(itemsInStore));
  }, [itemsInStore]);

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )

  function getInitialState() {
    const storeItems = global?.window?.localStorage.getItem('storeItems');

    if (!storeItems) {
      return [];
    }

    const newArray: StoreItem[] = [];

    JSON.parse(storeItems)
      .forEach(
        (itemObj: { _itemID: string, _quantity: number }) => {
          if (!isOutOfStock(itemObj._itemID)) {
            newArray.push(new StoreItem(itemObj._itemID, itemObj._quantity))
          }
        }
      );

    return newArray;
  }
}