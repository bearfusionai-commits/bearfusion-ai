import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BearFusion AI",
  description: "Advanced AI Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}