import React from "react";
import "./globals.css";

export const metadata = {
  title: "Celestial Devs — AI Engineering Studio",
  description: "High-performance digital products, autonomous multi-agent systems, and cloud-native software infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#07090E] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
