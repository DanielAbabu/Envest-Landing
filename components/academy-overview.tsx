"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Users, Zap } from "lucide-react"

const offerings = [
  {
    icon: Brain,
    title: "AI Literacy & Ethics",
    description:
      "Understanding AI fundamentals, ethical considerations, and responsible AI usage in professional contexts.",
  },
  {
    icon: Code,
    title: "Practical Applications",
    description: "Hands-on training with AI tools, automation platforms, and real-world project implementations.",
  },
  {
    icon: Users,
    title: "Development Focus",
    description: "Specialized content for development professionals, NGOs, and public sector organizations.",
  },
  {
    icon: Zap,
    title: "Adaptive Learning",
    description: "AI-powered learning management system that tracks progress and provides personalized feedback.",
  },
]

export function AcademyOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academy Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer a growing portfolio of AI education products, from bootcamps to micro-courses to on-demand tools
            for smart AI usage.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offerings.map((offering, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-gray-200 hover:border-[#1DA37A]/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-[#1DA37A]/10">
                      <offering.icon className="h-6 w-6 text-[#1DA37A]" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{offering.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
