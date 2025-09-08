"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Network } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Learn from Practitioners",
    description:
      "Get insights from professionals working on live AI projects in Ethiopia, with real-world experience and local context.",
  },
  {
    icon: TrendingUp,
    title: "Access Career Pathways",
    description:
      "Open doors to opportunities in AI, consulting, and development sectors with industry-recognized skills and certifications.",
  },
  {
    icon: Network,
    title: "Join the AI Community",
    description: "Become part of a growing network of AI professionals driving innovation and transformation locally.",
  },
]

export function WhyJoinAcademy() {
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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join the Academy?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            More than just courses — join a community that's shaping Ethiopia's AI future.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-gray-200 hover:border-[#1DA37A]/30 transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="p-4 rounded-xl bg-[#1DA37A]/10 w-fit mx-auto mb-6">
                    <reason.icon className="h-8 w-8 text-[#1DA37A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
