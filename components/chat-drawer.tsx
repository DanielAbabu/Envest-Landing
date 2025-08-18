"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User } from "lucide-react"

type ChatDrawerProps = {
  open?: boolean
  onOpenChange?: (v: boolean) => void
}

export function ChatDrawer({ open = false, onOpenChange = () => {} }: ChatDrawerProps) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
    { role: "assistant", text: "Hi! How can our AI team help you today?" },
  ])
  const [input, setInput] = useState("")

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[75vh] p-0 bg-white border-t border-gray-200 shadow-2xl">
        <SheetHeader className="p-4 border-b border-gray-200 bg-gradient-to-r from-[#1DA37A]/5 to-[#8bd5ff]/5">
          <SheetTitle className="text-gray-900 flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Bot className="h-5 w-5 text-[#1DA37A]" />
            </motion.div>
            Chat with our AI team
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-[calc(75vh-8rem)]">
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[80%] rounded-2xl px-4 py-3 bg-[#1DA37A] text-white shadow-lg"
                      : "mr-auto max-w-[80%] rounded-2xl px-4 py-3 bg-gray-100 text-gray-900 shadow-lg"
                  }
                >
                  <div className="flex items-start gap-2">
                    {m.role === "assistant" && <Bot className="h-4 w-4 text-[#1DA37A] mt-0.5 flex-shrink-0" />}
                    {m.role === "user" && <User className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />}
                    <span className="leading-relaxed">{m.text}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <motion.form
            className="p-4 border-t border-gray-200 flex gap-3 bg-gradient-to-r from-gray-50 to-white"
            onSubmit={(e) => {
              e.preventDefault()
              const text = input.trim()
              if (!text) return
              setMessages((prev) => [...prev, { role: "user", text }])
              setInput("")
              setTimeout(() => {
                setMessages((prev) => [
                  ...prev,
                  {
                    role: "assistant",
                    text: "Thanks! A specialist will reach out shortly. For urgent inquiries, email hello@envest.tech.",
                  },
                ])
              }, 500)
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Input
              placeholder="Ask about automation, training, or partnerships..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Message"
              className="bg-white border-gray-300 text-gray-900 shadow-sm focus:shadow-md transition-shadow duration-200"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                type="submit"
                className="bg-[#1DA37A] hover:bg-[#158A5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="flex items-center gap-2 relative z-10">
                  <Send className="h-4 w-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1DA37A] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
