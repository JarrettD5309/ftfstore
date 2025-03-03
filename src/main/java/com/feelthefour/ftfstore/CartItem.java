package com.feelthefour.ftfstore;

public class CartItem extends StoreItem {
    private int quantity;
    public CartItem(String stripeID, String name, boolean isMedia, int gramsWeight, int quantity) {
        super(stripeID, name, isMedia, gramsWeight);
        this.quantity = quantity;
    }

    public int getQuantity() {
        return this.quantity;
    }

    @Override
    public String toString() {
        return "stripeID: " + super.getStripeID() + ", quantity: " + this.quantity + ", name: " + super.getName() + ", isMedia: " + super.getIsMedia() + ", weight (g): " + super.getGramsWeight();
    }
    
}
