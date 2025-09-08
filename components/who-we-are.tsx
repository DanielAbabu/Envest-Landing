"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Globe, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "AI Automation & Consulting",
    description:
      "We design intelligent systems that streamline workflows and enhance operational efficiency for organizations across sectors.",
  },
  {
    icon: Globe,
    title: "Local Insights, Global Standards",
    description:
      "Our solutions are rooted in Ethiopia's unique context while meeting international best practices and quality standards.",
  },
  {
    icon: Users,
    title: "Education & Skills Development",
    description:
      "Through our AI Academy, we're building the next generation of AI-literate professionals in Ethiopia and East Africa.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description:
      "We continuously research and develop AI solutions tailored to local challenges in health, agriculture, and education.",
  },
]

export function WhoWeAre() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're building Ethiopia's AI ecosystem through three interconnected pillars: automation, education, and
            research.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-gray-200 hover:border-[#1DA37A]/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#1DA37A]/10 flex-shrink-0">
                      <highlight.icon className="h-6 w-6 text-[#1DA37A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
