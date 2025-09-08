"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users, BookOpen, BarChart3, ArrowRight } from "lucide-react"
import { useRegistration } from "./registration-provider"

const features = [
  {
    icon: Users,
    title: "Development-Focused Content",
    description: "Technical skills, policy-relevant content, and AI literacy tailored for development professionals.",
  },
  {
    icon: BookOpen,
    title: "AI-Enabled LMS",
    description: "Built on our in-house learning platform designed to track progress and provide adaptive feedback.",
  },
  {
    icon: BarChart3,
    title: "Reflective Learning",
    description: "Encouraging thoughtful engagement with AI tools and ethical considerations in professional contexts.",
  },
]

export function FeaturedProduct() {
  const { openDialog } = useRegistration()

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-gray-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="h-6 w-6 text-[#1DA37A]" />
                  <span className="text-sm font-semibold text-[#1DA37A] uppercase tracking-wide">Featured Product</span>
                </div>

                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl md:text-4xl text-gray-900 mb-4">Devidends Academy</CardTitle>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our flagship learning platform tailored for aspiring development professionals. It combines
                    technical skills, policy-relevant content, and AI literacy — helping young professionals navigate
                    and leverage tools like large language models in ethical, effective ways.
                  </p>
                </CardHeader>

                <div className="space-y-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-[#1DA37A]/10 flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-[#1DA37A]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={() => openDialog({ interest: "Academy" })}
                  className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-8 py-3"
                >
                  Learn More About Devidends Academy
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="relative min-h-[300px] lg:min-h-[400px] bg-gradient-to-br from-[#1B1826] to-[#1DA37A] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Interactive Learning Experience</h3>
                  <p className="text-white/80 leading-relaxed">
                    Engage with real-world scenarios, receive AI-powered feedback, and build practical skills that
                    matter in today's development landscape.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
