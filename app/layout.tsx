"use client"
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {useEffect, useState} from "react";
import Loader from "@/components/shared/Loader";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Toast from "@/components/shared/Toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
      {
        loading ? <Loader/> : <div className="min-h-screen">
          {/*header component*/}
          <Header/>
          <main>
            {children}
          </main>
          {/*  footer component*/}
          <Footer/>
          <Toast />
        </div>
      }
      </body>
    </html>
  );
}
