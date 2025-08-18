"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"
import { useState } from "react"
import { ChatDrawer } from "@/components/chat-drawer"
import { useRegistration } from "./registration-provider"
import { motion } from "framer-motion"

export function MobileStickyCTA() {
  const [openChat, setOpenChat] = useState(false)
  const { openDialog } = useRegistration()

  return (
    <>
      <motion.div
        className="fixed inset-x-0 bottom-0 z-50 md:hidden p-4 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto flex items-center gap-3">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className="w-full bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              onClick={() => openDialog({ interest: "General" })}
            >
              <span className="flex items-center gap-2 relative z-10">
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1DA37A] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent hover:shadow-lg transition-all duration-300"
              onClick={() => setOpenChat(true)}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <ChatDrawer open={openChat} onOpenChange={setOpenChat} />
    </>
  )
}
