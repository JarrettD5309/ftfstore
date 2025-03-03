package com.feelthefour.ftfstore;

import java.util.ArrayList;

public class ProductArray {
    private ArrayList<StoreItem> products;

    public ProductArray() {
        this.products = new ArrayList<>();
        StoreItem thirtyFourTrolleyRelaxation = new StoreItem("price_1QoXfKAthGHyEEe1h7ScHrT3", "34 Trolley - Relaxation 12", true);
        this.products.add(thirtyFourTrolleyRelaxation);
    }

    public ArrayList<StoreItem> getProducts() {
        return this.products;
    }
}
