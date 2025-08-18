"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hammer, ArrowLeft, Home } from "lucide-react"
import { motion } from "framer-motion"

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white relative overflow-hidden">
      <motion.div
        className="max-w-2xl text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mx-auto mb-12 size-32 rounded-full bg-gray-100 flex items-center justify-center shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Hammer className="size-16 text-gray-600" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Under Construction
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We're building something impactful here. In the meantime, head back home or register your interest from the
          landing page.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            asChild
            className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg bg-white hover:shadow-lg transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              Register Interest
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
