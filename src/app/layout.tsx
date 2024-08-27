import MainProvider from "@/components/provider";
import { TFCChildren } from "@/core/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realtyna",
};

const RootLayout: TFCChildren = ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <ToastContainer />
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
};
export default RootLayout;
