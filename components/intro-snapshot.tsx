"use client";

import { Badge } from "@/components/ui/badge";
import { Cpu, GraduationCap, Handshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Cpu,
    label: "Workflows automated",
    value: 12,
    suffix: "+",
    color: "#1DA37A",
    gradient: "from-[#1DA37A] to-[#22C55E]",
  },
  {
    icon: GraduationCap,
    label: "Professionals trained",
    value: 24,
    suffix: "+",
    color: "#1DA37A",
    gradient: "from-[#1DA37A] to-[#059669]",
  },
  {
    icon: Handshake,
    label: "Partners & clients",
    value: 6,
    suffix: "+",
    color: "#8bd5ff",
    gradient: "from-[#8bd5ff] to-[#0EA5E9]",
  },
  {
    icon: MapPin,
    label: "Key sectors",
    value: 4,
    suffix: "",
    color: "#6366F1",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    isSpecial: true,
    sectors: ["Agriculture", "Healthcare", "Education", "Public Services"],
  },
];

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, hasStarted]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
      className="tabular-nums"
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export function IntroSnapshot() {
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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mx-auto max-w-4xl text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-gray-100 text-gray-700 border-gray-200 mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold">
            Company Snapshot
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            {"Innovating for Ethiopia's Future"}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {
              "Envest Technologies is an innovative AI automation and education company. We design intelligent systems for development and enterprise, run AI training programs to close the skills gap, and research local AI solutions for young professional training, work management, health, and more."
            }
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="group relative">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative mb-4 md:mb-6">
                      <div
                        className={`h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br ${s.gradient} p-0.5 mx-auto`}
                      >
                        <div className="h-full w-full bg-white rounded-xl flex items-center justify-center">
                          <s.icon className="h-6 w-6 md:h-8 md:w-8 text-gray-700" />
                        </div>
                      </div>
                    </div>

                    {/* Special Stats */}
                    {s.isSpecial ? (
                      <div className="text-center space-y-4">
                        <div className="text-3xl md:text-5xl font-bold text-gray-900">
                          <AnimatedCounter
                            target={s.value}
                            suffix={s.suffix}
                            duration={1500 + i * 200}
                          />
                        </div>
                        <div className="text-sm md:text-lg font-semibold text-gray-600 uppercase tracking-wide mb-4 md:mb-6">
                          {s.label}
                        </div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            {s.sectors?.map((sector, idx) => (
                              <motion.div
                                key={sector}
                                className="text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 bg-gray-100 text-gray-700 rounded-full font-medium border border-gray-200"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.6 + idx * 0.1,
                                }}
                              >
                                {sector}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center space-y-3">
                        <div className="text-3xl md:text-5xl font-bold text-gray-900">
                          <AnimatedCounter
                            target={s.value}
                            suffix={s.suffix}
                            duration={2000 + i * 300}
                          />
                        </div>
                        <div className="text-sm md:text-lg font-semibold text-gray-600 uppercase tracking-wide">
                          {s.label}
                        </div>
                        <motion.div
                          className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        >
                          <motion.div
                            className={`h-full bg-gradient-to-r ${s.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: 1 + i * 0.1,
                              ease: "easeOut",
                            }}
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
