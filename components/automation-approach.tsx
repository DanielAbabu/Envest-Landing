"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Wrench, Users, MapPin } from "lucide-react"

const approaches = [
  {
    icon: Building2,
    title: "For Development & Enterprises",
    description:
      "We build solutions that strengthen service delivery in health, agriculture, and education while also enhancing operational efficiency for businesses and SMEs.",
  },
  {
    icon: Wrench,
    title: "Low-Code / No-Code Tools",
    description:
      "Using lightweight and secure platforms, we design robust automations without heavy infrastructure costs.",
  },
  {
    icon: Users,
    title: "End-to-End Support",
    description:
      "From scoping and building workflows to training teams and monitoring results, we ensure every automation is usable, sustainable, and measurable.",
  },
  {
    icon: MapPin,
    title: "Local Relevance",
    description:
      "Every solution is adapted to local systems and needs, with emphasis on accessibility, affordability, and impact.",
  },
]

export function AutomationApproach() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We combine technical expertise with deep understanding of local contexts to deliver automation solutions
            that truly work.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {approaches.map((approach, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-gray-200 hover:border-[#1DA37A]/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-[#1DA37A]/10">
                      <approach.icon className="h-6 w-6 text-[#1DA37A]" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{approach.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
