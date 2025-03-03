package com.feelthefour.ftfstore;

import java.util.HashMap;

public class StoreRegistry {
    private HashMap<String,StoreItem> registry;

    public StoreRegistry() {
        this.registry = new HashMap<>();
    }

    public void addItem(StoreItem storeItem) {
        this.registry.put(storeItem.getStripeID(), storeItem);
    }

    public StoreItem getItem(String stripeID) {
        return this.registry.get(stripeID);
    }

    @Override
    public String toString() {
        String returnString = "items in registry: ";
        for(String key: this.registry.keySet()) {
            returnString += this.registry.get(key).getName() + " (" + key + "), ";
        }

        return returnString;
    }
}
