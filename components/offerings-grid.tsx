"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, GraduationCap, FlaskConical, ArrowRight } from "lucide-react"
import { useRegistration } from "./registration-provider"
import { motion } from "framer-motion"

const items = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "We automate critical workflows for enterprises and governments—from data collection to predictive insights. Built for Ethiopia's realities.",
    points: [
      "Process Automation (NGOs & Enterprises)",
      "AI in Agriculture, Health, Education, Public Services",
      "AI Strategy & Consulting",
    ],
    interest: "Automation" as const,
    color: "#1DA37A",
  },
  {
    icon: GraduationCap,
    title: "AI Academy",
    desc: "Practical, job-ready training tailored to local challenges. Bootcamps, online courses, and certifications.",
    points: [
      "Intensive bootcamps (automation, Python, ML basics)",
      "Online courses on applied AI",
      "Certifications recognized by partners",
    ],
    interest: "Academy" as const,
    color: "#1DA37A",
  },
  {
    icon: FlaskConical,
    title: "Research & Impact",
    desc: "Local-first R&D to solve pressing development challenges with AI.",
    points: [
      "NLP for Ethiopian languages",
      "Sector pilots with measurable outcomes",
      "Ecosystem-building with academia and donors",
    ],
    interest: "Partnership" as const,
    color: "#8bd5ff",
  },
]

export function OfferingsGrid() {
  const { openDialog } = useRegistration()

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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Core Offerings</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Solutions that compound value across sectors and drive sustainable impact.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((it, i) => (
            <motion.div key={it.title} variants={itemVariants}>
              <Card className="h-full border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <CardHeader className="pb-4 relative z-10">
                  <div
                    className="h-16 w-16 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
                    style={{ backgroundColor: `${it.color}15` }}
                  >
                    <it.icon className="h-8 w-8" style={{ color: it.color }} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{it.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed">{it.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {it.points.map((p, idx) => (
                      <li key={p} className="flex items-start gap-3">
                        <div
                          className="h-2 w-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: it.color }}
                        ></div>
                        <span className="text-sm text-gray-700">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => openDialog({ interest: it.interest })}
                    className="w-full bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      {it.title === "AI Academy" ? "Sign up for Training" : "Get Started"}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
