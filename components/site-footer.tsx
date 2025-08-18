"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRegistration } from "./registration-provider"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/under-construction", label: "About" },
  { href: "/under-construction", label: "AI Automation" },
  { href: "/under-construction", label: "AI Academy" },
  { href: "/under-construction", label: "Insights" },
  { href: "/under-construction", label: "Contact" },
]

export function SiteFooter() {
  const { openDialog } = useRegistration()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1DA37A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#8bd5ff] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/envest-main-logo.png"
                alt="Envest Technologies"
                height={48}
                width={192}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Driving development with applied AI and automation across Ethiopia's key sectors.
            </p>
            <div className="space-y-4">
              <p className="font-semibold text-gray-900 mb-4">Contact Information</p>
              <motion.div
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-4 w-4 text-[#1DA37A] group-hover:scale-110 transition-transform duration-200" />
                <span>hello@envest.tech</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-4 w-4 text-[#1DA37A] group-hover:scale-110 transition-transform duration-200" />
                <span>+251 11 000 0000</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="h-4 w-4 text-[#1DA37A] group-hover:scale-110 transition-transform duration-200" />
                <a
                  className="text-[#1DA37A] hover:text-[#158A5A] font-medium transition-colors duration-200"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/company/envest
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={l.href}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span>{l.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-6">Stay Updated</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get the latest updates on AI developments and opportunities in Ethiopia.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                onClick={() => openDialog({ interest: "General" })}
                className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold mb-4 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group w-full"
              >
                <span className="flex items-center gap-2 relative z-10">
                  Subscribe / Register Interest
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1DA37A] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Opens a quick registration form to stay connected with our latest updates and opportunities.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Envest Technologies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
