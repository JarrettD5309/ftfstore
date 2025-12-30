package com.feelthefour.ftfstore;

import java.util.ArrayList;

import com.stripe.param.checkout.SessionCreateParams;

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

    public ArrayList<SessionCreateParams.ShippingAddressCollection.AllowedCountry> getAllowedShippingCountries() {
        ArrayList<SessionCreateParams.ShippingAddressCollection.AllowedCountry> allowedCountries = new ArrayList<>();
        // Argentina
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.AR);
        // Austria
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.AT);
        // Australia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.AU);
        // Bosnia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.BA);
        // Belgium
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.BE);
        // Brazil
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.BR);
        // Canada
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.CA);
        // Switzerland
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.CH);
        // Costa Rica
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.CR);
        // Czech Republic
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.CZ);
        // Germany
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.DE);
        // Denmark
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.DK);
        // Spain
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.ES);
        // Finland
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.FI);
        // France
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.FR);
        // UK
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.GB);
        // Croatia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.HR);
        // Hungary
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.HU);
        // Indonesia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.ID);
        // Ireland
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.IE);
        // Italy
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.IT);
        // Japan
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.JP);
        // South Korea
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.KR);
        // Luxembourg
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.LU);
        // Mexico
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.MX);
        // Netherlands
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.NL);
        // Norway
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.NO);
        // New Zealand
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.NZ);
        // Poland
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.PL);
        // Puerto Rico
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.PR);
        // Portugal
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.PT);
        // Serbia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.RS);
        // Sweden
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.SE);
        // Slovenia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.SI);
        // Slovakia
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.SK);
        // Thailand
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.TH);
        // USA
        allowedCountries.add(SessionCreateParams.ShippingAddressCollection.AllowedCountry.US);

        return allowedCountries;
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
        int numMediaItems = 0;
        int numNonMediaItems = 0;

        for(CartItem cartItem: cartItems) {
            if(cartItem.getIsMedia()) {
                numMediaItems += cartItem.getQuantity();
            } else {
                numNonMediaItems += cartItem.getQuantity();
            }
        }

        return getShippingMediaUSA(numMediaItems) + getShippingNonMediaUSA(numNonMediaItems);
    }

    private long getShippingMediaUSA(int numMediaItems) {
        int itemOnePriceCentsMedia = 700;
        int itemAdditionalPriceCentsMedia = 200;

        return getShippingCostCentsUSA(numMediaItems, itemOnePriceCentsMedia, itemAdditionalPriceCentsMedia);
    }

    private long getShippingNonMediaUSA(int numNonMediaItems) {
        int itemOnePriceCentsNonMedia = 1000;
        int itemAdditionalPriceCentsNonMedia = 500;

        return getShippingCostCentsUSA(numNonMediaItems, itemOnePriceCentsNonMedia, itemAdditionalPriceCentsNonMedia);
    }

    private long getShippingCostCentsUSA(int numTypeItems, int itemOnePriceCents, int itemAdditionalPriceCents) {
        long shippingCostCents = 0;

        if(numTypeItems == 0) {
            return 0;
        }

        if(numTypeItems == 1) {
            shippingCostCents += itemOnePriceCents;
        } else {
            shippingCostCents += itemOnePriceCents + (itemAdditionalPriceCents*(numTypeItems-1));
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
