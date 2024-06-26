import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import Header from "./Designs/Header";
import Footer from "./Designs/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <body className={inter.className}>
          <main className=" w-full overflow-x-hidden">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className=" fixed z-50  right-0 bottom-0 m-6 p-3">
                <ModeToggle />
              </div>
              {children}
            </ThemeProvider>
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
