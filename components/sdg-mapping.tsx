"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const items = [
  {
    title: "SDG 4: Quality Education",
    desc: "AI Academy training programs that equip Ethiopian learners with job-ready skills.",
    image: "/sdg-4-quality-education.png",
    bgColor: "#C5282F", // Red color matching SDG 4
  },
  {
    title: "SDG 8: Decent Work & Growth",
    desc: "Skills for AI jobs and pipelines for NGOs, government, and industry.",
    image: "/sdg-8-decent-work.png",
    bgColor: "#A21942", // Burgundy color matching SDG 8
  },
  {
    title: "SDG 9: Industry, Innovation, Infrastructure",
    desc: "Automation pilots and R&D fostering resilient digital infrastructure.",
    image: "/sdg-9-industry-innovation.png",
    bgColor: "#FD6925", // Orange color matching SDG 9
  },
]

export function SDGMapping() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-gray-100 text-gray-700 border-gray-200 mb-4">SDG Alignment</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {"Building Ethiopia's AI Ecosystem with Impact"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {
              "Our work supports education, decent work, and innovation—aligned with Ethiopia's priorities and the UN Sustainable Development Goals."
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-3xl h-80" style={{ backgroundColor: item.bgColor }}>
                <div className="relative z-10 p-8 text-center h-full flex flex-col justify-center">
                  {/* SDG Image - Larger and without shadow */}
                  <motion.div
                    className="mb-6 mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={140}
                      height={140}
                      className="mx-auto"
                    />
                  </motion.div>

                  <p className="text-white/90 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
