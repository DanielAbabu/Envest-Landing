"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type { RegistrationPayload } from "./registration-provider"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

type Props = {
  open?: boolean
  onOpenChange?: (v: boolean) => void
  preset?: Partial<RegistrationPayload>
}

export function RegistrationDialog({ open = false, onOpenChange = () => {}, preset }: Props) {
  const [form, setForm] = useState<RegistrationPayload>({ name: "", email: "", interest: "General", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (preset) setForm((prev) => ({ ...prev, ...preset }))
  }, [preset])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to submit")
      const data = await res.json()
      const key = "envest:registrations"
      const existing = JSON.parse(localStorage.getItem(key) || "[]")
      existing.push({ id: data.id, ...form, createdAt: new Date().toISOString() })
      localStorage.setItem(key, JSON.stringify(existing))
      setSuccess("Thanks! Your registration was received. We'll be in touch shortly.")
      setForm({ name: "", email: "", interest: "General", message: "" })
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-white border-gray-200 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="text-center pb-6">
            <DialogTitle className="text-2xl font-bold text-gray-900">Register your interest</DialogTitle>
            <DialogDescription className="text-gray-600 text-base">
              Tell us how we can help—automation, academy enrollment, or partnerships.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-6">
            <motion.div
              className="grid gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Label htmlFor="name" className="text-gray-900 font-semibold">
                Name
              </Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white border-gray-300 text-gray-900 focus:border-[#1DA37A] focus:ring-[#1DA37A] transition-colors duration-200"
                placeholder="Your full name"
              />
            </motion.div>
            <motion.div
              className="grid gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Label htmlFor="email" className="text-gray-900 font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white border-gray-300 text-gray-900 focus:border-[#1DA37A] focus:ring-[#1DA37A] transition-colors duration-200"
                placeholder="you@example.com"
              />
            </motion.div>
            <motion.div
              className="grid gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Label htmlFor="interest" className="text-gray-900 font-semibold">
                Area of interest
              </Label>
              <select
                id="interest"
                className="h-12 rounded-md px-4 text-sm bg-white border border-gray-300 text-gray-900 focus:border-[#1DA37A] focus:ring-[#1DA37A] transition-colors duration-200"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value as RegistrationPayload["interest"] })}
              >
                <option value="Automation">Automation</option>
                <option value="Academy">Academy</option>
                <option value="Partnership">Partnership</option>
                <option value="General">General</option>
              </select>
            </motion.div>
            <motion.div
              className="grid gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Label htmlFor="message" className="text-gray-900 font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Briefly describe your goals..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white border-gray-300 text-gray-900 focus:border-[#1DA37A] focus:ring-[#1DA37A] transition-colors duration-200 min-h-[100px]"
              />
            </motion.div>

            {error && (
              <motion.div
                className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="h-4 w-4 text-red-600" />
                <p className="text-sm text-red-600">{error}</p>
              </motion.div>
            )}

            {success && (
              <motion.div
                className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="h-4 w-4 text-green-600" />
                <p className="text-sm text-green-600">{success}</p>
              </motion.div>
            )}

            <motion.div
              className="pt-4 flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1DA37A] hover:bg-[#158A5A] text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {loading ? "Submitting..." : "Submit"}
                    <Send className="h-4 w-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1DA37A] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6"
                >
                  Cancel
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
