import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleFont = localFont({
  src: [
    {
      path: "./fonts/space.ttf",
      weight: "800",
      style: 'normal'
    },
  ],
  variable: '--font-google-font'
});

export const metadata: Metadata = {
  title: "IdeaSeed | Pitch Your Business Idea!!",
  description: "Pitch | Vote | Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font">{children}</body>
    </html>
  );
}
