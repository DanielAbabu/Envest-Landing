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
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-white text-gray-700 border-gray-200 shadow-sm mb-6 px-6 py-3 text-lg font-medium">
            Recent Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Recent Impact Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                  {/* Progress Bar at Top */}
                  <div className="w-full h-2 bg-gray-100">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#1DA37A] to-[#22C55E] transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Content - Takes 3/5 of the width */}
                    <div className="lg:col-span-3 p-12 md:p-20 flex flex-col justify-center">
                      {/* Header Info */}
                      <motion.div
                        className="flex items-center gap-6 mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <Badge
                          className="text-white border-0 px-6 py-3 text-lg font-semibold rounded-xl"
                          style={{ backgroundColor: currentStory.color }}
                        >
                          {currentStory.category}
                        </Badge>
                        <div className="flex items-center gap-3 text-gray-500 text-lg">
                          <Calendar className="h-5 w-5" />
                          <span className="font-medium">
                            {currentStory.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 text-lg">
                          <Clock className="h-5 w-5" />
                          <span className="font-medium">
                            {currentStory.readTime}
                          </span>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {currentStory.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {currentStory.description}
                      </motion.p>

                      {/* Impact and CTA */}
                      <motion.div
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {/* Enhanced Impact Display */}
                        <div className="flex items-center gap-6 bg-gray-50 rounded-2xl px-8 py-6 border border-gray-100">
                          <div
                            className="w-5 h-5 rounded-full shadow-sm"
                            style={{ backgroundColor: currentStory.color }}
                          />
                          <div>
                            <span className="text-lg text-gray-500 font-medium">
                              Key Impact
                            </span>
                            <div className="font-bold text-gray-900 text-xl">
                              {currentStory.impact}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced CTA Button */}
                        <Button
                          asChild
                          className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-10 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-lg"
                        >
                          <Link
                            href="/under-construction"
                            className="inline-flex items-center gap-3"
                          >
                            Read Full Story
                            <ArrowRight className="h-6 w-6" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>

                    {/* Right Image - Takes 2/5 of the width */}
                    <motion.div
                      className="lg:col-span-2 relative h-96 lg:h-full overflow-hidden"
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
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Controls */}
          <motion.div
            className="flex items-center justify-center mt-20 gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Dots Indicator */}
            <div className="flex items-center gap-6">
              {insights.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-10 h-4 bg-[#1DA37A] rounded-full"
                      : "w-4 h-4 bg-gray-300 hover:bg-gray-400 rounded-full"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            {/* Enhanced Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="p-4 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-gray-600" />
              ) : (
                <Play className="h-6 w-6 text-gray-600" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
