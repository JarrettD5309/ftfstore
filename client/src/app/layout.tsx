import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import localFont from 'next/font/local';
import { StoreProvider } from "./storeProvider/store-provider";

export const metadata: Metadata = {
  title: "Feel The Four Records",
  description: "Dance music record label from Philadelphia",
};

const futuraFont = localFont({
  src: [
    {
      path: '../fonts/Futura-55Regular.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: '../fonts/Futura-65Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/Futura-46LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/Futura-45Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/Futura-56Italic.woff2',
      weight: 'normal',
      style: 'italic'
    },
    {
      path: '../fonts/Futura-66MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../fonts/Futura-76BoldItalic.woff2',
      weight: 'bold',
      style: 'italic'
    },
    {
      path: '../fonts/Futura-75Bold.woff2',
      weight: 'bold',
      style: 'normal'
    }
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={futuraFont.className}>
      <head>
        <script src="https://js.stripe.com/v3/"></script>
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
