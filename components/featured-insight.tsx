"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Play, Pause, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const insights = [
  {
    id: 3,
    title: "Smart education platform for remote learning",
    description:
      "Enabled 1,000+ students to access quality education through AI-powered adaptive learning systems across rural schools, personalizing learning paths and improving outcomes.",
    category: "Education",
    date: "2 Weeks Ago",
    impact: "45% better outcomes",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    color: "#8B5CF6",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Smarter Job Access for the Development Sector",
    description:
      "We introduced an AI-powered jobs alert system that aggregates vacancies from across the sector, classifies them by domain and seniority, and delivers tailored updates directly to users' inboxes or Telegram.",
    category: "Development Sector",
    date: "3 Weeks Ago",
    impact: "70% reduction in job search time",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#F59E0B",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Human-Assisted Smart CV Shortlisting",
    description:
      "Our AI-assisted CV shortlisting tool parses Terms of Reference and job descriptions, quickly identifying and scoring the most relevant profiles with human oversight for accuracy and fairness.",
    category: "Recruitment",
    date: "1 Month Ago",
    impact: "60% faster hiring cycles",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#EF4444",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "AI-Powered Product Descriptions for SMEs",
    description:
      "We developed an AI-driven product description generator tailored for SMEs that produces engaging, professional descriptions in seconds from just a short product brief.",
    category: "E-Commerce",
    date: "2 Months Ago",
    impact: "2x increase in sales inquiries",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#6366F1",
    readTime: "8 min read",
  },
];

export function FeaturedInsight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const autoPlayDuration = 7000; // 7 seconds

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % insights.length);
          return 0;
        }
        return prev + 100 / (autoPlayDuration / 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPlaying]);

  const goToStory = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentStory = insights[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-white text-gray-700 border-gray-200 shadow-sm mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium">
            Recent Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Recent Impact Stories
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real automation projects delivering measurable results across
            Ethiopia's key sectors.
          </p>
        </motion.div>

        {/* Main Slideshow */}
        <div className="w-full">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-gray-100">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#1DA37A] to-[#22C55E] transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col">
                    {/* Top Image */}
                    <motion.div
                      className="relative h-64 md:h-96 lg:h-[400px] overflow-hidden"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <img
                        src={currentStory.image || "/placeholder.svg"}
                        alt={currentStory.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/20" />
                    </motion.div>

                    {/* Bottom Content */}
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      {/* Header Info */}
                      <motion.div
                        className="flex flex-wrap items-center gap-4 md:gap-8 mb-6 md:mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <Badge
                          className="text-white border-0 px-6 py-2 md:px-12 md:py-3 text-sm md:text-lg font-semibold rounded-xl"
                          style={{ backgroundColor: currentStory.color }}
                        >
                          {currentStory.category}
                        </Badge>
                        <div className="flex items-center gap-2 md:gap-3 text-gray-500 text-sm md:text-lg">
                          <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                          <span className="font-medium">
                            {currentStory.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-gray-500 text-sm md:text-lg">
                          <Clock className="h-4 w-4 md:h-5 md:w-5" />
                          <span className="font-medium">
                            {currentStory.readTime}
                          </span>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 md:mt-8 mb-4 md:mb-8 leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {currentStory.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-sm md:text-xl text-gray-600 mb-6 md:mb-18 leading-relaxed max-w-3xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {currentStory.description}
                      </motion.p>

                      {/* Impact and CTA */}
                      <motion.div
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 md:gap-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {/* Impact Display */}
                        <div className="flex items-center gap-4 md:gap-12">
                          <div
                            className="w-3 h-3 md:w-4 md:h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: currentStory.color }}
                          />
                          <div>
                            <span className="text-sm md:text-lg text-gray-600 font-medium">
                              Key Impact
                            </span>
                            <div className="font-bold text-gray-900 text-sm md:text-lg">
                              {currentStory.impact}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                          asChild
                          className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-6 md:px-24 py-4 md:py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs md:text-sm"
                        >
                          <Link
                            href="/under-construction"
                            className="inline-flex items-center gap-3 md:gap-5"
                          >
                            Read Full Story
                            <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <motion.div
            className="flex items-center justify-center mt-12 md:mt-20 gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Dots Indicator */}
            <div className="flex items-center gap-4 md:gap-6">
              {insights.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 h-2 md:w-10 md:h-4 bg-[#1DA37A] rounded-full"
                      : "w-2 h-2 md:w-4 md:h-4 bg-gray-300 hover:bg-gray-400 rounded-full"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="p-3 md:p-4 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 md:h-6 md:w-6 text-gray-600" />
              ) : (
                <Play className="h-4 w-4 md:h-6 md:w-6 text-gray-600" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
