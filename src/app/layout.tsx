import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gen AI Full Stack Fintech Development",
  description: "A revolutionary training program designed to transform developers into 10x engineers by mastering AI-assisted fintech application development.",
  keywords: ["Gen AI", "Fintech", "Next.js", "AI development", "KK"],
  authors: [{ name: "KK" }],
  openGraph: {
    title: "Gen AI Full Stack Fintech Development",
    description: "Master AI-assisted development for cutting-edge fintech solutions.",
    url: "https://gen-ai-fintech-course.com", // Replace with your final deployed URL
    siteName: "GenAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen AI Full Stack Fintech Development",
    description: "Master AI-assisted development for cutting-edge fintech solutions.",
  },
  icons: {
    icon: "/j_logo.svg", // This is the new line to ensure your icon is updated
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}