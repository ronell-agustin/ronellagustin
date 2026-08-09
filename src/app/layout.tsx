import type { Metadata } from "next";
import ScrollToTop from "./ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronell Agustin",
  description: "Portfolio, resume, projects, and professional work of Ronell Agustin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
