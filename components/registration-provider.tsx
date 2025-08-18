"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { RegistrationDialog } from "./registration-dialog"

type RegistrationContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  openDialog: (preset?: Partial<RegistrationPayload>) => void
}

const RegistrationContext = createContext<RegistrationContextValue | null>(null)

export type RegistrationPayload = {
  name: string
  email: string
  interest: "Automation" | "Academy" | "Partnership" | "General"
  message?: string
}

export function useRegistration() {
  const ctx = useContext(RegistrationContext)
  if (!ctx) throw new Error("useRegistration must be used within RegistrationProvider")
  return ctx
}

export function RegistrationProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [preset, setPreset] = useState<Partial<RegistrationPayload> | undefined>(undefined)

  const openDialog = useCallback((p?: Partial<RegistrationPayload>) => {
    setPreset(p)
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ open, setOpen, openDialog }), [open, setOpen, openDialog])

  return (
    <RegistrationContext.Provider value={value}>
      {children}
      <RegistrationDialog open={open} onOpenChange={setOpen} preset={preset} />
    </RegistrationContext.Provider>
  )
}
