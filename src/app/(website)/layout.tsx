import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import BackToTopButton from "@/components/BackToTop";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathventures",
  description: "Learn through simulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          navbar: {
            display: "none",
          },
        },
        layout: {
          privacyPageUrl: "/privacy-policy",
        },
      }}
    >
      <html lang="en">
        <body className={nunito.className}>
          <Navbar />
          {children}
          <BackToTopButton />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
