"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, MapPin, Leaf, Handshake, Award } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Harnessing cutting-edge AI to solve real problems and create meaningful impact.",
  },
  {
    icon: MapPin,
    title: "Local Relevance",
    description: "Building solutions rooted in Ethiopia's unique context and specific challenges.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Prioritizing long-term value and sustainable impact over quick fixes.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Bridging ecosystems: donors, government, private sector, and communities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering measurable results with precision, quality, and professional standards.",
  },
]

export function CoreValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Values</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The principles that guide our work and define our commitment to Ethiopia's AI transformation.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-gray-200 hover:border-[#1DA37A]/30 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-[#1DA37A]/10 w-fit mx-auto mb-4 group-hover:bg-[#1DA37A]/20 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-[#1DA37A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
