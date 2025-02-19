package com.feelthefour.ftfstore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// import java.nio.file.Paths;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

import io.github.cdimascio.dotenv.Dotenv;
import io.javalin.Javalin;
import io.javalin.http.HttpStatus;
import io.javalin.http.staticfiles.Location;

/**
 * Hello world!
 *
 */
public class App {
  private static int PORT = 7070;
  private static String PRICE = "price";
  private static String QUANTITY = "quantity";

  public static void main(String[] args) {
    // This is your test secret API key.
    Dotenv dotenv = Dotenv.load();
    Stripe.apiKey = dotenv.get("STRIPE_API_KEY");

    var app = Javalin.create(config -> {
      config.staticFiles.add("out", Location.EXTERNAL);
    });

    app.post("/create-checkout-session", cxt -> {

      Map<String, List<String>> formParams = cxt.formParamMap();

      ArrayList<SessionCreateParams.LineItem> productLineItemList = new ArrayList<>();

      boolean priceIDFound = false;
      boolean quantityFound = false;
      HashMap<String, String> tempProductMap = new HashMap<>();
      int i = 0;

      for (String param : formParams.keySet()) {

        if(!param.split("_")[1].equals(String.valueOf(i))) {
          cxt.status(HttpStatus.BAD_REQUEST);
          return;
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

      String YOUR_DOMAIN = "http://localhost:" + PORT;
      SessionCreateParams params = SessionCreateParams.builder()
          .setMode(SessionCreateParams.Mode.PAYMENT)
          .setSuccessUrl(YOUR_DOMAIN + "/success.html")
          .setCancelUrl(YOUR_DOMAIN + "/cancel.html")
          .setAutomaticTax(
              SessionCreateParams.AutomaticTax.builder()
                  .setEnabled(true)
                  .build())
          .addAllLineItem(productLineItemList)
          .build();
      Session session = Session.create(params);

      cxt.redirect(session.getUrl(), HttpStatus.SEE_OTHER);
    });

    app.start(PORT);
  }
}
