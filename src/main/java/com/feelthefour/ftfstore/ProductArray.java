package com.feelthefour.ftfstore;

import java.util.ArrayList;

public class ProductArray {
    private ArrayList<StoreItem> products;

    public ProductArray() {
        this.products = new ArrayList<>();
        StoreItem thirtyFourTrolleyRelaxation = new StoreItem("price_1R8mJEAthGHyEEe1N3ms1Gvz", "34 Trolley - Relaxation 12", true);
        this.products.add(thirtyFourTrolleyRelaxation);

        StoreItem thirtyFourTrolleyTShirtL = new StoreItem("price_1Sk4rVAthGHyEEe1nGTU1Drz", "34 Trolley - T-Shirt - Size: L", false);
        this.products.add(thirtyFourTrolleyTShirtL);

        StoreItem thirtyFourTrolleyTShirtXL = new StoreItem("price_1Sk4t1AthGHyEEe1SIHy6ZFR", "34 Trolley - T-Shirt - Size: XL", false);
        this.products.add(thirtyFourTrolleyTShirtXL);
    }

    public ArrayList<StoreItem> getProducts() {
        return this.products;
    }
}
