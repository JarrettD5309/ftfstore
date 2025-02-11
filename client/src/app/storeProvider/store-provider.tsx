"use client"
import { createContext, useState } from "react";
import { StoreItem } from "../utils/classes";

export interface StoreItemContext {
  itemsInStore: StoreItem[];
  setItemsInStore: React.Dispatch<React.SetStateAction<StoreItem[]>>;
}

export const StoreContext = createContext<StoreItemContext>({itemsInStore: [], setItemsInStore: () => {}});

export function StoreProvider({ children }: Readonly<{children: React.ReactNode;}>) {
  const [itemsInStore, setItemsInStore] = useState<StoreItem[]>([new StoreItem('abc',2)]);
  const value = {itemsInStore, setItemsInStore};

    return (
      <StoreContext.Provider value={value}>
        {children}
      </StoreContext.Provider>
    )
}