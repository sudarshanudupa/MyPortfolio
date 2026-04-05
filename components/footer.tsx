"use client"

import { motion } from "framer-motion"
import { Shield, Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 sm:py-12 border-t border-border relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-primary group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <span className="text-base sm:text-lg font-bold font-mono group-hover:text-accent transition-colors">
              Sudarshan Udupa
            </span>
          </motion.a>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            {["About", "Experience", "Projects", "Skills", "Certifications", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4">
            {[
              { icon: Github, href: "https://github.com/sudarshanudupa" },
              { icon: Linkedin, href: "https://linkedin.com/in/sudarshan-udupa-4069221a4" },
              { icon: Mail, href: "mailto:sudarshanudupa737@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            <p className="mt-2">
              {currentYear} Sudarshan Udupa. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg glow-border"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>
    </footer>
  )
}
