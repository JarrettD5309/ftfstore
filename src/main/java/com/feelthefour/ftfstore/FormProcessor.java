package com.feelthefour.ftfstore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.stripe.param.checkout.SessionCreateParams;

import io.javalin.http.Context;

public class FormProcessor {
    private static String PRICE = "price";
    private static String QUANTITY = "quantity";
    private StoreRegistry storeRegistry;

    public FormProcessor(StoreRegistry storeRegistry) {
        this.storeRegistry = storeRegistry;
    }

    public ArrayList<CartItem> getCartArrayList(Map<String, List<String>> formParams, Context cxt) {
        ArrayList<CartItem> cartItems = new ArrayList<>();
        boolean priceIDFound = false;
        boolean quantityFound = false;
        HashMap<String, String> tempProductMap = new HashMap<>();
        int i = 0;

        for (String param : formParams.keySet()) {

            if (!param.split("_")[1].equals(String.valueOf(i))) {
                return null;
            }

            if (param.split("_")[0].equals(PRICE) && param.split("_")[1].equals(String.valueOf(i))) {
                priceIDFound = true;
                tempProductMap.put(PRICE, cxt.formParam(param));
            }

            if (param.split("_")[0].equals(QUANTITY) && param.split("_")[1].equals(String.valueOf(i))) {
                quantityFound = true;
                tempProductMap.put(QUANTITY, cxt.formParam(param));
            }

            if (priceIDFound == true && quantityFound == true) {
                String stripeID = tempProductMap.get(PRICE);
                StoreItem storeItem = storeRegistry.getItem(stripeID);
                String name = storeItem.getName();
                boolean isMedia = storeItem.getIsMedia();
                int gramsWeight = storeItem.getGramsWeight();
                int quantity = Integer.valueOf(tempProductMap.get(QUANTITY));
                CartItem cartItem = new CartItem(stripeID, name, isMedia, gramsWeight, quantity);
                cartItems.add(cartItem);
                priceIDFound = false;
                quantityFound = false;
                tempProductMap.clear();
                i++;
            }
        }

        return cartItems;
    }

    public ArrayList<SessionCreateParams.LineItem> getProductLineItemList(Map<String, List<String>> formParams,
            Context cxt) {
        ArrayList<SessionCreateParams.LineItem> productLineItemList = new ArrayList<>();

        boolean priceIDFound = false;
        boolean quantityFound = false;
        HashMap<String, String> tempProductMap = new HashMap<>();
        int i = 0;

        for (String param : formParams.keySet()) {

            if (!param.split("_")[1].equals(String.valueOf(i))) {
                return null;
            }

            if (param.split("_")[0].equals(PRICE) && param.split("_")[1].equals(String.valueOf(i))) {
                priceIDFound = true;
                tempProductMap.put(PRICE, cxt.formParam(param));
            }

            if (param.split("_")[0].equals(QUANTITY) && param.split("_")[1].equals(String.valueOf(i))) {
                quantityFound = true;
                tempProductMap.put(QUANTITY, cxt.formParam(param));
            }

            if (priceIDFound == true && quantityFound == true) {
                productLineItemList.add(
                        SessionCreateParams.LineItem.builder()
                                .setQuantity(Long.valueOf(tempProductMap.get(QUANTITY)))
                                .setPrice(tempProductMap.get(PRICE))
                                .build());
                priceIDFound = false;
                quantityFound = false;
                tempProductMap.clear();
                i++;
            }
        }

        return productLineItemList;
    }
}
