import type { Metadata } from "next";
import ScrollToTop from "./ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ronellagustin.com"),
  title: {
    default: "Ronell Agustin | Portfolio & Resume",
    template: "%s | Ronell Agustin",
  },
  description:
    "Portfolio and resume of Ronell Agustin, spanning web development, digital marketing, creative work, business operations, and military leadership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ronell Agustin | Portfolio & Resume",
    description:
      "Professional work, technical experience, and creative portfolio of Ronell Agustin.",
    url: "/",
    siteName: "Ronell Agustin",
    type: "website",
    images: [
      {
        url: "/portfolio/ronellPhoto.jpg",
        alt: "Ronell Agustin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronell Agustin | Portfolio & Resume",
    description:
      "Professional work, technical experience, and creative portfolio of Ronell Agustin.",
    images: ["/portfolio/ronellPhoto.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
