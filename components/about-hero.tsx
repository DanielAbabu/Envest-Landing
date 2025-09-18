"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistration } from "./registration-provider";
import ShaderBackground from "./shader-background";

export function AboutHero() {
  const { openDialog } = useRegistration();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <ShaderBackground>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto py-16 md:py-20 relative z-10 px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-[#8bd5ff]" />
              <p className="text-sm sm:text-lg font-semibold tracking-wide uppercase text-[#8bd5ff]">
                About Envest Technologies
              </p>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-[#EEFCF7]"
            >
              Who We Are
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-[#9d9d9d] leading-relaxed mb-6 sm:mb-10 max-w-3xl mx-auto"
            >
              Envest is an AI automation, education, and consulting firm
              committed to creating meaningful impact through technology. Based
              in Ethiopia, we combine deep local insights with global best
              practices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={() => openDialog({ interest: "General" })}
                className="bg-[#0C4531] hover:bg-[#0A3A28] text-[#EEFCF7] font-semibold px-6 sm:px-8 py-3 text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
              </Button>
              <button
                onClick={() => openDialog({ interest: "Partnership" })}
                className="text-sm sm:text-lg font-semibold text-[#0F573E] hover:text-white transition-all duration-300 underline-offset-4 hover:underline"
              >
                Partner With Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ShaderBackground>
  );
}
