"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function FlagshipProject() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-gray-200 bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <motion.div
                    className="inline-flex items-center gap-2 text-[#8bd5ff] mb-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Sparkles className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">Flagship Project</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
                      {"AI-Assisted Learning Platform"}
                    </CardTitle>
                    <p className="text-lg text-[#1DA37A] font-semibold">Devidends LMS</p>
                  </motion.div>
                </CardHeader>

                <CardContent className="p-0">
                  <motion.p
                    className="text-lg text-gray-700 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {
                      "Our LMS blends AI-powered feedback with practical training for development professionals, bridging education with real-world needs."
                    }
                  </motion.p>

                  <motion.ul
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {[
                      "Personalized AI feedback on assignments",
                      "Hands-on labs aligned to Ethiopian market needs",
                      "Analytics for learners, mentors, and organizations",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        <div className="h-2 w-2 rounded-full bg-[#1DA37A] mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <Button
                      asChild
                      className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/under-construction" className="inline-flex items-center gap-2">
                        See How It Works
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </div>

              <motion.div
                className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/ai-learning-ethiopian-professionals.png"
                  alt="AI-Assisted Learning Platform mockup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
