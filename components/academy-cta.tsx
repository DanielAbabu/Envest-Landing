"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bell } from "lucide-react"
import { useRegistration } from "./registration-provider"

export function AcademyCTA() {
  const { openDialog } = useRegistration()

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#1B1826] to-[#1DA37A] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Ready to Build Your AI Skills?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Join Ethiopia's growing community of AI-literate professionals. Get first access to new programs,
                exclusive content, and networking opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => openDialog({ interest: "Academy" })}
                  className="bg-white text-[#1DA37A] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Bell className="h-5 w-5 mr-2" />
                  Sign Up for First Access
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openDialog({ interest: "Academy" })}
                  className="text-[#1DA37A] font-semibold px-8 py-4 text-lg hover:underline"
                >
                  Explore All Programs
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <p className="text-sm text-white/70 mt-6">
                Be among the first to access new courses, bootcamps, and exclusive AI learning resources.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
