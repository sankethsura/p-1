"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { PopupHandlerProvider } from "./context/popups/popup-context";
import PopupDisplayHandler from "./context/popups/popup-display-handler";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupHandlerProvider>
          <PopupDisplayHandler>{children}</PopupDisplayHandler>
        </PopupHandlerProvider>
      </body>
    </html>
  );
}
