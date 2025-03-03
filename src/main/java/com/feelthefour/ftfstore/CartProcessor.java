package com.feelthefour.ftfstore;

import java.util.ArrayList;

public class CartProcessor {
    public long getShippingCostCents(ArrayList<CartItem> cartItems, String location) {
        if(location.equals("USA")) {
            return getShippingUSA(cartItems);
        }

        if(location.equals("CANADA")) {
            return getShippingCanada(cartItems);
        }

        if(location.equals("WORLD")) {
            return getShippingWorld(cartItems);
        }

        return 0;
    }

    private long getShippingCanada(ArrayList<CartItem> cartItems) {
        int numItems = 0;

        for(CartItem cartItem: cartItems) {
            numItems += cartItem.getQuantity();
        }

        long shippingCostCents = 0;

        if(numItems == 1) {
            shippingCostCents += 2500;
        } else {
            shippingCostCents += 2500 + (500*(numItems-1));

        }

        return shippingCostCents;
    }

    private long getShippingUSA(ArrayList<CartItem> cartItems) {
        // create logic to deal with media vs not media
        int numItems = 0;

        for(CartItem cartItem: cartItems) {
            numItems += cartItem.getQuantity();
        }

        long shippingCostCents = 0;

        if(numItems == 1) {
            shippingCostCents += 700;
        } else {
            shippingCostCents += 700 + (200*(numItems-1));

        }

        return shippingCostCents;
    }

    private long getShippingWorld(ArrayList<CartItem> cartItems) {
        int numItems = 0;

        for(CartItem cartItem: cartItems) {
            numItems += cartItem.getQuantity();
        }

        long shippingCostCents = 0;

        if(numItems == 1) {
            shippingCostCents += 3500;
        } else {
            shippingCostCents += 3500 + (500*(numItems-1));

        }

        return shippingCostCents;
    }
}
