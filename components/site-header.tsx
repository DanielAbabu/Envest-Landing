"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useRegistration } from "./registration-provider";
import { motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/under-construction", label: "AI Automation" },
  { href: "/under-construction", label: "AI Academy" },
  { href: "/under-construction", label: "Insights" },
  { href: "/under-construction", label: "About" },
];

export function SiteHeader({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { openDialog } = useRegistration();

  const [hidden, setHidden] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Determine if we're in hero section (roughly first 90vh)
      const heroHeight = window.innerHeight * 0.9;
      setIsInHero(y < heroHeight);

      // Hide/show navbar logic
      if (y < 8) setHidden(false);
      else if (delta > 8) setHidden(true);
      else if (delta < -8) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dynamic styles based on section
  const headerStyles = isInHero
    ? {
        backgroundColor: "rgba(27, 24, 38, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }
    : {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      };

  const textColor = isInHero ? "text-white" : "text-gray-900";
  const textColorMuted = isInHero ? "text-white/80" : "text-gray-700";
  const hoverColor = isInHero ? "hover:text-white" : "hover:text-[#1DA37A]";
  const activeColor = isInHero ? "text-white" : "text-[#1DA37A]";

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        className
      )}
      style={headerStyles}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Link href="/" className="inline-flex items-center group">
            <div className="relative h-10 transition-all duration-300 group-hover:scale-105">
              <Image
                src={
                  isInHero ? "/envest-white-logo.png" : "/envest-main-logo.png"
                }
                alt="Envest Technologies"
                height={40}
                width={160}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            >
              <Link
                href={n.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  pathname === n.href ? activeColor : textColorMuted,
                  hoverColor
                )}
              >
                {n.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                    isInHero ? "bg-[#8bd5ff]" : "bg-[#1DA37A]"
                  )}
                ></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button
              onClick={() => openDialog({ interest: "General" })}
              className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-medium px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </motion.div>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "transition-all duration-300",
                  isInHero
                    ? "bg-transparent border-white/20 text-white hover:bg-white/10"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                )}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white text-gray-900 border-l border-gray-200"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  <Image
                    src="/envest-main-logo.png"
                    alt="Envest Technologies"
                    height={32}
                    width={128}
                    className="h-8 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {nav.map((n) => (
                  <Link
                    key={n.label}
                    href={n.href}
                    className="text-base text-gray-700 hover:text-[#1DA37A] transition-colors duration-300"
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
    </motion.header>
  );
}
