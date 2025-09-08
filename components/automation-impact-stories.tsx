"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, ShoppingCart, CheckCircle } from "lucide-react"
import Image from "next/image"

const stories = [
  {
    id: 1,
    icon: Briefcase,
    title: "Smarter Job Access for the Development Sector",
    category: "Development Sector",
    challenge:
      "Consultants, NGOs, and job seekers in Ethiopia's development sector struggled with information scattered across multiple portals, mailing lists, and word-of-mouth channels.",
    solution:
      "We introduced an AI-powered jobs alert system that aggregates vacancies from across the sector, classifies them by domain and seniority, and delivers tailored updates directly to users' inboxes or Telegram.",
    impact:
      "Less noise, more opportunities, and a fairer playing field for navigating the competitive development job landscape.",
    metrics: "70% reduction in job search time",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    icon: Users,
    title: "Human-Assisted Smart CV Shortlisting",
    category: "Recruitment",
    challenge:
      "Recruitment in Ethiopia's development sector is often slowed down by the overwhelming number of CVs received for a single role, leading to time-intensive and biased manual sorting.",
    solution:
      "Our AI-assisted CV shortlisting tool parses Terms of Reference and job descriptions, quickly identifying and scoring the most relevant profiles with human oversight for accuracy and fairness.",
    impact:
      "Faster hiring cycles, better matches, and fairer recruitment practices — strengthening organizations' ability to put the right people in the right roles.",
    metrics: "60% faster hiring cycles",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "AI-Powered Product Descriptions for SMEs",
    category: "E-Commerce",
    challenge:
      "Ethiopia's small businesses struggle with creating compelling product descriptions for e-commerce, spending hours crafting content or posting products with minimal text.",
    solution:
      "We developed an AI-driven product description generator tailored for SMEs that produces engaging, professional descriptions in seconds from just a short product brief.",
    impact:
      "SMEs can now scale their digital presence without hiring full-time content teams, directly supporting Ethiopia's broader digital economy.",
    metrics: "2x increase in sales inquiries",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export function AutomationImpactStories() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Real Impact Stories</h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            See how our AI automation solutions are transforming organizations across Ethiopia's key sectors.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-8 ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#1DA37A]/10">
                    <story.icon className="h-8 w-8 text-[#1DA37A]" />
                  </div>
                  <Badge className="bg-[#1DA37A]/10 text-[#1DA37A] border-[#1DA37A]/20 px-4 py-2 text-sm font-semibold">
                    {story.category}
                  </Badge>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{story.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      The Challenge
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">{story.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Our Solution
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">{story.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-[#1DA37A]" />
                      The Impact
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">{story.impact}</p>
                    <div className="bg-[#1DA37A]/5 border-l-4 border-[#1DA37A] p-4 rounded-r-lg">
                      <p className="text-lg font-semibold text-[#1DA37A]">{story.metrics}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Overlay with icon */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <story.icon className="h-6 w-6 text-[#1DA37A]" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{story.category}</p>
                        <p className="text-xs text-gray-600">Success Story</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
