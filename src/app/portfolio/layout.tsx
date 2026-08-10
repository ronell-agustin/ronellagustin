import type { Metadata } from "next";
import ModalFocusManager from "./ModalFocusManager";

export const metadata: Metadata = {
  title: "Creative Work",
  description:
    "Creative portfolio of Ronell Agustin featuring illustration, photography, videography, and 3D environment design.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ModalFocusManager />
      {children}
    </>
  );
}
