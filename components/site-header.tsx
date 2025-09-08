"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useRegistration } from "./registration-provider"
import { useEffect, useState } from "react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/automation", label: "AI Automation" },
  { href: "/academy", label: "AI Academy" },
  { href: "/under-construction", label: "Insights" },
  { href: "/about", label: "About" },
]

export function SiteHeader({ className = "" }: { className?: string }) {
  const pathname = usePathname()
  const { openDialog } = useRegistration()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      // Check if we're in the hero section (first section)
      const heroSection = document.querySelector("section")
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setIsHeroSection(scrollY < heroHeight - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine background based on current page and scroll position
  const getHeaderBackground = () => {
    if (pathname === "/" || pathname === "/automation" || pathname === "/academy" || pathname === "/about") {
      return isHeroSection ? "bg-transparent" : "bg-white/95 backdrop-blur-md"
    }
    return "bg-white/95 backdrop-blur-md"
  }

  // Determine text color based on background
  const getTextColor = () => {
    if (
      (pathname === "/" || pathname === "/automation" || pathname === "/academy" || pathname === "/about") &&
      isHeroSection
    ) {
      return "text-white"
    }
    return "text-gray-900"
  }

  // Determine logo to use
  const getLogo = () => {
    if (
      (pathname === "/" || pathname === "/automation" || pathname === "/academy" || pathname === "/about") &&
      isHeroSection
    ) {
      return "/envest-white-logo.png"
    }
    return "/envest-main-logo.png"
  }

  return (
    <header className={cn("fixed top-0 z-50 w-full transition-all duration-300", getHeaderBackground(), className)}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="inline-flex items-center">
          <Image
            src={getLogo() || "/placeholder.svg"}
            alt="Envest Technologies"
            width={160}
            height={40}
            className="h-8 w-auto transition-all duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-80",
                pathname === n.href ? "opacity-100" : "opacity-70",
                getTextColor(),
              )}
            >
              {n.label}
            </Link>
          ))}
          <Button
            onClick={() => openDialog({ interest: "General" })}
            className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-medium px-6"
          >
            Get Started
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "border-opacity-20 bg-transparent",
                  isHeroSection &&
                    (pathname === "/" || pathname === "/automation" || pathname === "/academy" || pathname === "/about")
                    ? "border-white text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100",
                )}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-gray-900">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <Image
                    src="/envest-main-logo.png"
                    alt="Envest Technologies"
                    width={140}
                    height={35}
                    className="h-7 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {nav.map((n) => (
                  <Link
                    key={n.label}
                    href={n.href}
                    className="text-base text-gray-700 hover:text-[#1DA37A] transition-colors"
                  >
                    {n.label}
                  </Link>
                ))}
                <Button
                  onClick={() => openDialog({ interest: "General" })}
                  className="mt-4 bg-[#1DA37A] hover:bg-[#158A5A] text-white"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
