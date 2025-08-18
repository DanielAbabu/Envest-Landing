"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Briefcase, Factory } from "lucide-react"
import { motion } from "framer-motion"

const items = [
  {
    icon: BookOpen,
    title: "SDG 4: Quality Education",
    desc: "AI Academy training programs that equip Ethiopian learners with job-ready skills.",
    color: "#1DA37A",
    bgImage: "/ai-learning-ethiopian-professionals.png",
  },
  {
    icon: Briefcase,
    title: "SDG 8: Decent Work & Growth",
    desc: "Skills for AI jobs and pipelines for NGOs, government, and industry.",
    color: "#1DA37A",
    bgImage: "/ethiopian-ai-professionals.png",
  },
  {
    icon: Factory,
    title: "SDG 9: Industry, Innovation, Infrastructure",
    desc: "Automation pilots and R&D fostering resilient digital infrastructure.",
    color: "#8bd5ff",
    bgImage: "/ai-analytics-dashboard.png",
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
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${it.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-white/90 group-hover:bg-black/60 transition-colors duration-500" />

                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    style={{ backgroundColor: `${it.color}15` }}
                  >
                    <it.icon
                      className="h-8 w-8 group-hover:text-white transition-colors duration-300"
                      style={{ color: it.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                    {it.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                    {it.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
