package com.feelthefour.ftfstore;

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

  public static void main(String[] args) {
    // This is your test secret API key.
    Dotenv dotenv = Dotenv.load();
    Stripe.apiKey = dotenv.get("STRIPE_API_KEY");

    var app = Javalin.create(config -> {
      config.staticFiles.add("public", Location.EXTERNAL);
    });

    app.post("/create-checkout-session", cxt -> {
      String priceID1 = cxt.formParam("product1price");
      Long quantity1 = Long.valueOf(cxt.formParam("product1quantity"));
      String priceID2 = cxt.formParam("product2price");
      Long quantity2 = Long.valueOf(cxt.formParam("product2quantity"));

      String YOUR_DOMAIN = "http://localhost:" + PORT;
      SessionCreateParams params = SessionCreateParams.builder()
          .setMode(SessionCreateParams.Mode.PAYMENT)
          .setSuccessUrl(YOUR_DOMAIN + "/success.html")
          .setCancelUrl(YOUR_DOMAIN + "/cancel.html")
          .setAutomaticTax(
              SessionCreateParams.AutomaticTax.builder()
                  .setEnabled(true)
                  .build())
          .addLineItem(
              SessionCreateParams.LineItem.builder()
                  .setQuantity(quantity1)
                  .setPrice(priceID1)
                  .build())
          .addLineItem(
              SessionCreateParams.LineItem.builder()
                  .setQuantity(quantity2)
                  .setPrice(priceID2)
                  .build())
          .build();
      Session session = Session.create(params);

      cxt.redirect(session.getUrl(), HttpStatus.SEE_OTHER);
    });

    app.start(PORT);
  }
}
