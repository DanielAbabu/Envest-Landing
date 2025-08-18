"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Envest accelerated our digital transformation with practical automations and upskilling.",
    author: "Program Director, USAID Partner",
    rating: 5,
  },
  {
    quote:
      "Their AI Academy produced job-ready talent we now rely on for data projects.",
    author: "Faculty Lead, Addis Ababa University",
    rating: 5,
  },
  {
    quote:
      "Reliable team, local context expertise, and measurable impact in weeks, not months.",
    author: "CTO, Social Enterprise",
    rating: 5,
  },
  {
    quote:
      "The automations saved our field teams countless hours and improved data quality.",
    author: "Operations Lead, NGO",
    rating: 5,
  },
];

// duplicate for seamless marquee
const marqueeItems = [...testimonials, ...testimonials];

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#1DA37A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8bd5ff] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Partners
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What our collaborators and clients say about working with Envest
            Technologies.
          </motion.p>
        </motion.div>

        {/* Moving testimonials marquee - removed Card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <div className="marquee">
              <div className="marquee-track">
                {marqueeItems.map((t, idx) => (
                  <motion.div
                    key={`${t.author}-${idx}`}
                    className="marquee-item bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    aria-hidden={idx >= testimonials.length}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DA37A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <motion.div
                      className="relative z-10 p-10 w-[600px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Quote
                        className="h-6 w-6 mb-4 text-[#1DA37A]"
                        aria-hidden
                      />

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="h-4 w-4 fill-[#1DA37A] text-[#1DA37A]" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-gray-800 font-medium mb-4 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                        {t.quote}
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">
                        — {t.author}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 via-[#1DA37A] to-gray-900 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {"Ethiopia's AI future starts here. Let's build it together."}
          </motion.p>
        </motion.div>
      </div>

      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }
        .marquee-track {
          display: flex;
          align-items: stretch;
          gap: 24px;
          width: max-content;
          transform: translateX(-50%);
          animation: marquee-right 30s linear infinite;
          padding: 24px 0;
        }
        .marquee-item {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-width: 380px;
          max-width: 480px;
          padding: 40px; /* Increased padding for better spacing */
          background-color: white; /* Ensure background color is consistent */
          border-radius: 16px; /* Optional: Add rounded corners */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visual */
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0);
            flex-wrap: wrap;
          }
          .marquee-item {
            min-width: 320px;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
