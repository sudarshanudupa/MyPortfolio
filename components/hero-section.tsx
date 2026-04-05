"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false })

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono"
              whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Open to Opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <motion.span 
              className="text-primary glow-text inline-block"
              whileHover={{ scale: 1.02 }}
            >
              Sudarshan Udupa
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4 sm:mb-6"
          >
            <span className="text-accent">Cybersecurity</span> & <span className="text-primary">DevOps</span> Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
          >
            MTech in Cybersecurity | IEEE Published Researcher | 2+ Years at ANZ
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="gap-2 glow-border w-full sm:w-auto" asChild>
                <a href="#contact">
                  <FileText className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 w-full sm:w-auto group border-primary/30 bg-background/85 text-foreground hover:bg-background/95 hover:text-foreground dark:border-primary/20 dark:bg-background/10 dark:text-foreground dark:hover:bg-background/20 dark:hover:text-foreground"
                asChild
              >
                <a href="/resume.pdf" download="Sudarshan-Udupa-Resume.pdf">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground"
          >
            <motion.span 
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              Mangalore, India
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-mono hidden sm:block">Scroll</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full border border-border group-hover:border-primary transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  )
}
