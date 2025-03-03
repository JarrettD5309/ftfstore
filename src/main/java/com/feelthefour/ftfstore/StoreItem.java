package com.feelthefour.ftfstore;

public class StoreItem {
    private String stripeID;
    private String name;
    private boolean isMedia;
    private int gramsWeight;

    public StoreItem(String stripeID, String name, boolean isMedia, int gramsWeight) {
        this.stripeID = stripeID;
        this.name = name;
        this.isMedia = isMedia;
        this.gramsWeight = gramsWeight;
    }

    public StoreItem(String stripeID, String name, boolean isMedia) {
        this.stripeID = stripeID;
        this.name = name;
        this.isMedia = isMedia;
        this.gramsWeight = 0;
    }

    public String getStripeID() {
        return this.stripeID;
    }

    public String getName() {
        return this.name;
    }

    public boolean getIsMedia() {
        return this.isMedia;
    }

    public int getGramsWeight() {
        return this.gramsWeight;
    }

    @Override
    public String toString() {
        return "stripeID: " + this.stripeID + ", name: " + this.name + ", isMedia: " + this.isMedia + ", weight (g): " + this.gramsWeight;
    }
}
