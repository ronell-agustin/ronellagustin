import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected professional web development, ecommerce, local-business, agency, and publishing work by Ronell Agustin.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
