import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { TanStackQueryProvider } from "./provider/tanstack-query";
import { ReactQueryClientProvider } from "@/context/ReactQueryClientProvider";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const Satoshi = localFont({
  src: "../../public/fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi",
});

const Millik = localFont({
  src: "../../public/fonts/Millik.ttf",
  variable: "--font-millik",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Springfield Microfinance Bank Limited",
    default: "Springfield Microfinance Bank Limited",
  },
  description:
    "Springfield Micro Finance Bank Limited (SMFB), situated in Igando, Lagos State, is a licensed Microfinance Bank dedicated to providing cutting-edge microfinance services/products to underserved communities and MSME through technological innovation.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <head>
          {/* Add favicon links manually */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
        </head>
        <body
          className={cn(
            inter.className,
            Satoshi.variable,
            Millik.variable,
            "antialiased min-h-screen"
          )}
        >
          <Toaster closeButton position="bottom-right" richColors />

          <TanStackQueryProvider>{children}</TanStackQueryProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
