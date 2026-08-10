import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Ronell Agustin covering IT skills, professional experience, education, military awards, qualifications, and training.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
