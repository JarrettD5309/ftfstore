package com.feelthefour.ftfstore;

import java.nio.file.Paths;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ) {
        System.out.println( "Hello World!" );
        // System.out.println("PATH!!!!: " + Paths.get("public").toAbsolutePath().toString());
        var app = Javalin.create(config -> {
            config.staticFiles.add("public", Location.EXTERNAL);
        })
            // .get("/", ctx -> ctx.result("Hello World 2"))
            .start(7070);
    }
}
