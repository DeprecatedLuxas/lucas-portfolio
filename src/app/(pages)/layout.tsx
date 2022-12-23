import { Inter } from "@next/font/google";
import { Header } from "~/components/Header";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="flex flex-col min-height-screen max-w-2xl mx-auto bg-gray-900 font-inter antialiased">
        <Header/>
        <main>
          {children}
        </main>
        <footer className="sm:mt-12 py-8 border-t border-gray-800">
          <p className="text-center text-gray-200">
            &copy; {new Date().getFullYear()} Lucas Norgaard, All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
