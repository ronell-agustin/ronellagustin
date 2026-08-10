import type { Metadata } from "next";
import ScrollToTop from "./ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronell Agustin",
  description: "Portfolio, resume, projects, and professional work of Ronell Agustin.",
  icons: {
    icon: "/portfolio/favicon.png",
    shortcut: "/portfolio/favicon.png",
    apple: "/portfolio/favicon.png",
  },
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
