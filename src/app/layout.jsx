"use client";
import Head from "next/head";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Inter } from "next/font/google";

import "./globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const inter = Inter({ subsets: ["latin"] });

import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <Head>
        <title>Body Hack - Helping Girls Lose Weight</title>
        <meta name="description" content="Helping Girls Lose Weight" />
      </Head>

      <Elements stripe={stripePromise}>
        <div className={inter.className}>{children}</div>
      </Elements>
    </AuthProvider>
  );
}
