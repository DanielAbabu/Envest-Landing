import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"
import { AppThemeProvider } from "@/components/app-theme"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Envest Technologies",
  description: "Driving development with applied AI and automation in Ethiopia.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  )
}
