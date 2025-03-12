package com.feelthefour.ftfstore;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

import io.github.cdimascio.dotenv.Dotenv;
import io.javalin.Javalin;
import io.javalin.http.HttpStatus;
import io.javalin.http.staticfiles.Location;

public class App {
    private static int PORT = 7070;
    private static String LOCATION = "location";
    private static StoreRegistry storeRegistry = initRegistry();
    private static FormProcessor formProcessor = new FormProcessor(storeRegistry);
    private static CartProcessor cartProcessor = new CartProcessor();

    public static void main(String[] args) {
        // This is your test secret API key.
        Dotenv dotenv = Dotenv.load();
        Stripe.apiKey = dotenv.get("STRIPE_API_KEY");

        var app = Javalin.create(config -> {
            config.staticFiles.add("out", Location.EXTERNAL);
        });

        app.error(404, ctx -> {
            ctx.redirect("/404");
        });

        app.post("/create-checkout-session", cxt -> {

            Map<String, List<String>> formParams = cxt.formParamMap();

            String location = cxt.formParam(LOCATION);

            if(location == null) {
                cxt.status(HttpStatus.BAD_REQUEST);
                return;
            }

            ArrayList<SessionCreateParams.LineItem> productLineItemList = formProcessor
                    .getProductLineItemList(formParams, cxt);
            ArrayList<CartItem> cartItems = formProcessor.getCartArrayList(formParams, cxt);
            long shippingCostCents = cartProcessor.getShippingCostCents(cartItems, location);

            if (productLineItemList == null) {
                cxt.status(HttpStatus.BAD_REQUEST);
                return;
            }

            String YOUR_DOMAIN = "http://localhost:" + PORT;
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setSuccessUrl(YOUR_DOMAIN + "/success")
                    .setCancelUrl(YOUR_DOMAIN + "/cart")
                    .setAutomaticTax(
                            SessionCreateParams.AutomaticTax.builder()
                                    .setEnabled(true)
                                    .build())
                    .addShippingOption(
                            SessionCreateParams.ShippingOption.builder()
                                    .setShippingRateData(
                                            SessionCreateParams.ShippingOption.ShippingRateData.builder()
                                                    .setType(
                                                            SessionCreateParams.ShippingOption.ShippingRateData.Type.FIXED_AMOUNT)
                                                    .setFixedAmount(
                                                            SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount
                                                                    .builder()
                                                                    .setAmount(shippingCostCents)
                                                                    .setCurrency("usd")
                                                                    .build())
                                                    .setDisplayName("Shipping")

                                                    .build())
                                    .build())
                    .addAllLineItem(productLineItemList)
                    .build();
            Session session = Session.create(params);

            cxt.redirect(session.getUrl(), HttpStatus.SEE_OTHER);
        });

        app.start(PORT);
    }

    private static StoreRegistry initRegistry() {
        StoreRegistry registry = new StoreRegistry();
        ProductArray products = new ProductArray();
        for (StoreItem item : products.getProducts()) {
            registry.addItem(item);
        }

        return registry;
    }

}
