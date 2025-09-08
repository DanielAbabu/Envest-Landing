"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companyLogos = [
  {
    name: "USAID",
    logo: "/placeholder.svg?height=60&width=120&text=USAID",
    width: 120,
    height: 60,
  },
  {
    name: "GIZ",
    logo: "/placeholder.svg?height=60&width=100&text=GIZ",
    width: 100,
    height: 60,
  },
  {
    name: "UNDP",
    logo: "/placeholder.svg?height=60&width=120&text=UNDP",
    width: 120,
    height: 60,
  },
  {
    name: "World Bank",
    logo: "/placeholder.svg?height=60&width=140&text=World+Bank",
    width: 140,
    height: 60,
  },
  {
    name: "Addis Ababa University",
    logo: "/placeholder.svg?height=60&width=100&text=AAU",
    width: 100,
    height: 60,
  },
  {
    name: "Ethiopian Ministry of Innovation",
    logo: "/placeholder.svg?height=60&width=120&text=MINT",
    width: 120,
    height: 60,
  },
  {
    name: "African Development Bank",
    logo: "/placeholder.svg?height=60&width=120&text=AfDB",
    width: 120,
    height: 60,
  },
  {
    name: "UN Women",
    logo: "/placeholder.svg?height=60&width=120&text=UN+Women",
    width: 120,
    height: 60,
  },
]

// Duplicate for seamless marquee
const marqueeLogos = [...companyLogos, ...companyLogos]

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
            Partners
          </motion.h2>
        </motion.div>

        {/* Company Logos Marquee */}
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
                {marqueeLogos.map((company, idx) => (
                  <motion.div
                    key={`${company.name}-${idx}`}
                    className="marquee-item bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
                    aria-hidden={idx >= companyLogos.length}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DA37A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <motion.div
                      className="relative z-10 p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={company.width}
                        height={company.height}
                        className="max-w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
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
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 32px;
          width: max-content;
          transform: translateX(-50%);
          animation: marquee-right 40s linear infinite;
          padding: 24px 0;
        }
        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 200px;
          height: 120px;
          flex-shrink: 0;
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
            justify-content: center;
          }
          .marquee-item {
            min-width: 180px;
            max-width: 200px;
          }
        }
      `}</style>
    </section>
  )
}
