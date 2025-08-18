"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Play, Pause, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const insights = [
  {
    id: 1,
    title: "Automated crop disease detection for 50+ cooperatives",
    description:
      "Deployed mobile vision workflows to flag early-stage leaf infections across participating farms in Oromia and Amhara regions, helping farmers identify threats before they spread and take preventive action.",
    category: "Agriculture",
    date: "This Week",
    impact: "30% reduction in crop loss",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    color: "#10B981",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Digitized patient triage for rural clinics",
    description:
      "Reduced intake time by 40% with AI-assisted forms and routing, improving healthcare access across 25 health centers and enabling faster patient care in underserved communities.",
    category: "Healthcare",
    date: "Last Week",
    impact: "40% faster processing",
    image: "/doc.jpeg",
    color: "#3B82F6",
    readTime: "4 min read",
  },
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-white text-gray-700 border-gray-200 shadow-sm mb-4 px-4 py-2 text-sm font-medium">
            Recent Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Recent Impact Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real automation projects delivering measurable results across
            Ethiopia's key sectors.
          </p>
        </motion.div>

        {/* Slideshow Container - Full Width */}
        <div className="w-full">
          {/* Main Slideshow */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 h-[500px] lg:h-[600px] flex flex-col">
                  {/* Progress Bar at Top */}
                  <div className="w-full h-1.5 bg-gray-100">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#1DA37A] to-[#22C55E] transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="grid lg:grid-cols-5 gap-0 flex-grow">
                    {/* Left Content - Takes 3/5 of the width */}
                    <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center">
                      {/* Header Info */}
                      <motion.div
                        className="flex items-center gap-4 mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <Badge
                          className="text-white border-0 px-4 py-2 text-sm font-semibold rounded-xl"
                          style={{ backgroundColor: currentStory.color }}
                        >
                          {currentStory.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">
                            {currentStory.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">
                            {currentStory.readTime}
                          </span>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {currentStory.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl"
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
                        <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
                          <div
                            className="w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: currentStory.color }}
                          />
                          <div>
                            <span className="text-sm text-gray-500 font-medium">
                              Key Impact
                            </span>
                            <div className="font-bold text-gray-900 text-lg">
                              {currentStory.impact}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced CTA Button */}
                        <Button
                          asChild
                          className="bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base"
                        >
                          <Link
                            href="/under-construction"
                            className="inline-flex items-center gap-3"
                          >
                            Read Full Story
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>

                    {/* Right Image - Takes 2/5 of the width */}
                    <motion.div
                      className="lg:col-span-2 relative h-64 lg:h-full max-h-[600px] overflow-hidden"
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
            className="flex items-center justify-center mt-16 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Dots Indicator */}
            <div className="flex items-center gap-4">
              {insights.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-3 bg-[#1DA37A] rounded-full"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
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
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-gray-600" />
              ) : (
                <Play className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
