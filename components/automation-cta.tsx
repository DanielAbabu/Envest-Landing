"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import { useRegistration } from "./registration-provider"

export function AutomationCTA() {
  const { openDialog } = useRegistration()

  return (
    <section className="py-20 bg-white">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Ready to Transform Your Operations?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how AI automation can streamline your workflows, reduce manual effort, and help your team
                focus on what matters most.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => openDialog({ interest: "Automation" })}
                  className="bg-white text-[#1DA37A] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Us for Your AI Automation Needs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openDialog({ interest: "General" })}
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <p className="text-sm text-white/70 mt-6">
                Get in touch to explore how we can help automate your specific workflows and challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
