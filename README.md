# Feel The Four Records Website and Webstore
<https://www.feelthefourrecords.com/> \
Version 2.0 \
By Jarrett Dougherty

## Description
The Feel The Four Records Website and Webstore is the online home of an independent dance music record label based in Philadelphia, PA. The site was built using Next.js for the frontend and Java for the backend. The webstore uses a Java server to securely connect and integrate with the Stripe payment processing system.

## Technologies Used
* HTML
* CSS
* JavaScript
* React
* Next.js
* Java
* Maven
* Javalin
* Stripe

## Instructions For Use
* The `/client` folder holds the React/Next.js code for the frontend. 
* `npm run dev` from the `/client` folder will run the app on `localhost:3000`.
* `npm run build` from the `/client` folder will build the frontend app in the `/client/out` folder.
* After the build is complete the `/client/out` folder will need to be copied to a location one level up at `/out` to be able to serve the frontend from the Java server.
* From the root directory, to build a new JAR file, run the command `mvn package`. This will build a JAR file within `/target`.
* To run the JAR file, in the root directory run the command `java -cp target/ftfstore-1.0-SNAPSHOT-jar-with-dependencies.jar com.feelthefour.ftfstore.App`. This will start the server on `localhost:7070`
* Note! To deploy the site, the `/out` directory and the main JAR file from `/target` will need to be manually copied to the `ftf-webstore-prod` repo.