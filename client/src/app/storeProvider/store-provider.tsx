"use client"
import { createContext, useEffect, useState } from "react";
import { StoreItem } from "../utils/classes";

export interface StoreItemContext {
  itemsInStore: StoreItem[];
  setItemsInStore: React.Dispatch<React.SetStateAction<StoreItem[]>>;
}

export const StoreContext = createContext<StoreItemContext>({ itemsInStore: [], setItemsInStore: () => { } });

export function StoreProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [itemsInStore, setItemsInStore] = useState<StoreItem[]>([]);
  const value = { itemsInStore, setItemsInStore };

  useEffect(() => {
    const savedItems = getInitialState();
    setItemsInStore(savedItems);
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
        (itemObj: { _itemID: string, _quantity: number }) =>
          newArray.push(new StoreItem(itemObj._itemID, itemObj._quantity))
      );

    return newArray;
  }
}