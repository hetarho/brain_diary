import "reflect-metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TRPCProvider } from "@/server/trpc/Provider";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/src/app/providers/AuthProviders";
import "@/src/app/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brain Diary",
  description: "뇌과학 기반 일기 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          themes={["rainbow", "ocean", "midnight", "blossom"]}
          defaultTheme="rainbow"
          attribute="data-theme"
        >
          <AuthProvider>
            <TRPCProvider>{children}</TRPCProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
