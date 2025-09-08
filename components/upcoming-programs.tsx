"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Laptop, ArrowRight } from "lucide-react"
import { useRegistration } from "./registration-provider"

const programs = [
  {
    icon: Laptop,
    title: "AI Bootcamps",
    description:
      "Intensive training in machine learning, automation, and applied AI for professionals ready to dive deep.",
    duration: "4-6 weeks",
    format: "Hybrid",
    level: "Intermediate",
    status: "Enrolling Now",
  },
  {
    icon: Calendar,
    title: "Online Courses & Webinars",
    description: "Flexible modules for professionals and students who need to balance learning with work commitments.",
    duration: "Self-paced",
    format: "Online",
    level: "All Levels",
    status: "Available",
  },
  {
    icon: Users,
    title: "Learning Tracks",
    description: "Structured pathways for beginner to intermediate AI users, with clear progression milestones.",
    duration: "3-6 months",
    format: "Blended",
    level: "Beginner to Intermediate",
    status: "Coming Soon",
  },
]

export function UpcomingPrograms() {
  const { openDialog } = useRegistration()

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Programs</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Choose from our range of programs designed to meet you where you are in your AI learning journey.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-gray-200 hover:border-[#1DA37A]/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#1DA37A]/10">
                      <program.icon className="h-6 w-6 text-[#1DA37A]" />
                    </div>
                    <Badge
                      variant={
                        program.status === "Available"
                          ? "default"
                          : program.status === "Enrolling Now"
                            ? "secondary"
                            : "outline"
                      }
                      className={program.status === "Enrolling Now" ? "bg-[#1DA37A] text-white" : ""}
                    >
                      {program.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-3">{program.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed text-sm">{program.description}</p>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{program.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => openDialog({ interest: "Academy" })}
                    className="w-full bg-[#1DA37A] hover:bg-[#158A5A] text-white"
                    disabled={program.status === "Coming Soon"}
                  >
                    {program.status === "Coming Soon" ? "Notify Me" : "Learn More"}
                    <ArrowRight className="h-4 w-4 ml-2" />
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
