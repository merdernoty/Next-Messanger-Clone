import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ToasterContext from "./(site)/context/ToasterContext";
import AuthContext from "./(site)/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MM-messeger",
  description: "Dima lox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext></ToasterContext>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
