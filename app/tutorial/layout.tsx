import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Tutorial - PayCrypto Extension",
  description: "Step-by-step guide to install PayCrypto browser extension from zip file. Learn how to enable developer mode and load unpacked extensions in Chrome.",
};

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}