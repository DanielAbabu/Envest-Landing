"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useRegistration } from "./registration-provider";
import { motion } from "framer-motion";

export function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1B1826 0%, #1DA37A 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(139, 213, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(29, 163, 122, 0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container mx-auto py-16 md:py-24 relative z-10 px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-white">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="h-5 w-5 text-[#8bd5ff]" />
              <p className="text-sm font-semibold tracking-wide uppercase text-[#8bd5ff]">
                Envest Technologies
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-[#8bd5ff] bg-clip-text text-transparent"
            >
              {"Driving Development. Empowering Businesses."}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed"
            >
              {"Transforming Ethiopia Through Applied AI and Automation."}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              {
                "Harnessing AI to automate systems, equip talent, and accelerate development across Ethiopia's key sectors."
              }
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            >
              <Button
                size="lg"
                onClick={() => openDialog({ interest: "Automation" })}
                className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Our AI Solutions
              </Button>
              <button
                onClick={() => openDialog({ interest: "Academy" })}
                className="text-lg font-semibold text-[#8bd5ff] hover:text-white transition-all duration-300 underline-offset-4 hover:underline"
              >
                Join the AI Academy
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-team-collaboration.png"
                width={800}
                height={520}
                alt="Diverse professional team collaborating on AI technology solutions"
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <motion.div
              className="hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image
                src="/excel.jpeg"
                alt="Modern laptop computer on glass table showing analytics dashboard"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Image
                src="/ai.jpeg"
                alt="Innovation and technology collaboration workspace"
                width={72}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
