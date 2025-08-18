"use client"

import type { CSSProperties, ReactNode } from "react"

export type AppTheme = {
  // Brand background shades - new purple/green theme
  bg: string // primary dark purple (#1B1826)
  bgGreen: string // accent green (#1DA37A)
  bgAlt: string // darker variant
  surface: string // card surface
  border: string // borders

  // Text
  text: string
  textMuted: string

  // CTA Orange (keeping existing)
  success: string
  successHover: string
  onSuccess: string

  // Accent (light cyan for small accents)
  accent: string
  onAccent: string
}

export const defaultTheme: AppTheme = {
  // Core backgrounds - purple/green theme
  bg: "#1B1826", // dark purple
  bgGreen: "#1DA37A", // vibrant green
  bgAlt: "#141119", // darker purple
  surface: "rgba(255,255,255,0.08)",
  border: "rgba(255,255,255,0.15)",

  // Text
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.85)",

  // CTA Orange (keeping existing)
  success: "#D74E09",
  successHover: "#B54308",
  onSuccess: "#ffffff",

  // Accent
  accent: "#8bd5ff",
  onAccent: "#000000",
}

function toCSSVars(theme: AppTheme): CSSProperties {
  return {
    // Backgrounds
    ["--color-bg" as any]: theme.bg,
    ["--color-bg-green" as any]: theme.bgGreen,
    ["--color-bg-alt" as any]: theme.bgAlt,
    ["--color-surface" as any]: theme.surface,
    ["--color-border" as any]: theme.border,

    // Text
    ["--color-text" as any]: theme.text,
    ["--color-text-muted" as any]: theme.textMuted,

    // CTA Orange
    ["--color-success" as any]: theme.success,
    ["--color-success-hover" as any]: theme.successHover,
    ["--color-on-success" as any]: theme.onSuccess,

    // Accent
    ["--color-accent" as any]: theme.accent,
    ["--color-on-accent" as any]: theme.onAccent,

    // Gradient combinations
    ["--gradient-primary" as any]: `linear-gradient(135deg, ${theme.bg} 0%, ${theme.bgGreen} 100%)`,
    ["--gradient-reverse" as any]: `linear-gradient(135deg, ${theme.bgGreen} 0%, ${theme.bg} 100%)`,
    ["--gradient-vertical" as any]: `linear-gradient(180deg, ${theme.bg} 0%, ${theme.bgGreen} 100%)`,
    ["--gradient-vertical-reverse" as any]: `linear-gradient(180deg, ${theme.bgGreen} 0%, ${theme.bg} 100%)`,
  } as CSSProperties
}

export function AppThemeProvider({
  theme = defaultTheme,
  children,
}: {
  theme?: AppTheme
  children: ReactNode
}) {
  return (
    <div style={toCSSVars(theme)} className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {children}
    </div>
  )
}
