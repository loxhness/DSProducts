import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/layout/MainNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: 'Daamiya Beauty',
    description: 'Premium hair styling products',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <MainNav />
        <main className="min-h-screen">
            {children}
        </main>
        </body>
        </html>
    )
}