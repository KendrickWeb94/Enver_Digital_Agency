import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import SideBar from "./components/SideBar";
{
  /* import TopBar from "./components/TopBar";*/
}

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
    <html lang="en">
      <body className={inter.className}>
        <section>
          <main className=" w-full overflow-x-hidden">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div>
                <div className=" fixed z-50  right-0 bottom-0 m-6 p-3">
                  <ModeToggle />
                </div>
                {/*<TopBar />*/}
                <div className=" flex gap-1 p-2 bg-black relative min-h-screen">
                  <div className=" absolute top-0 left-0 right-0 ">
                    <div className=" bg-indigo-500/85 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
                  </div>
                  <SideBar />
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </main>
        </section>
      </body>
    </html>
  );
}
