import type { Metadata } from "next";

import { Geist_Mono } from "next/font/google";
import "./globals.css";

import { getMetadata, themeConfig } from "@/config";

import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/ui/background";
import { MetaThemeColor } from "@/components/ui/meta-theme-color";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = getMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {themeConfig.defaultTheme == "dark"
          ? <meta name="theme-color" content="#000000" />
          : <meta name="theme-color" content="#FFFFFF" />
        }
      </head>
      <body className={`${geistMono.variable} antialiased tracking-[-0.1] font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={themeConfig.defaultTheme}
          disableTransitionOnChange={true}
        >
          <MetaThemeColor />
          <Background>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
