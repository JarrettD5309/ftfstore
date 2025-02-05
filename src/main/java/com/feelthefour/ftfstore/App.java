package com.feelthefour.ftfstore;

import io.javalin.Javalin;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ) {
        System.out.println( "Hello World!" );
        var app = Javalin.create()
            .get("/", ctx -> ctx.result("Hello World 2"))
            .start(7070);
    }
}
